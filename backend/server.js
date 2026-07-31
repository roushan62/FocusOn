const express = require('express')
const multer = require('multer')
const nodemailer = require('nodemailer')
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const crypto = require('crypto')

const app = express()
const PORT = process.env.PORT || 3001

// ──────────────────────────────────────────────
// Configuration from environment variables
// ──────────────────────────────────────────────
const {
  SMTP_HOST,
  SMTP_PORT = '587',
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM,
  SMTP_SECURE = 'false',
  TO_EMAIL = 'info@focusoninterior.in',
  ALLOWED_ORIGINS = '',
  RATE_LIMIT_WINDOW_MS = '60000',
  RATE_LIMIT_MAX = '5',
} = process.env

// ──────────────────────────────────────────────
// Allowed file types & max size
// ──────────────────────────────────────────────
const ALLOWED_MIMES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/jpg',
  'image/png',
]
const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png']
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB

// ──────────────────────────────────────────────
// CORS
// ──────────────────────────────────────────────
const origins = ALLOWED_ORIGINS
  ? ALLOWED_ORIGINS.split(',').map((o) => o.trim())
  : ['http://localhost:3000', 'http://localhost:3001', 'https://roushan62.github.io']
app.use(cors({ origin: origins, methods: ['POST'], allowedHeaders: ['Content-Type'] }))
app.options('*', cors())

// ──────────────────────────────────────────────
// Multer – file upload with validation
// ──────────────────────────────────────────────
const uploadDir = path.join(__dirname, 'uploads')
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const unique = crypto.randomBytes(8).toString('hex')
    const ext = path.extname(file.originalname).toLowerCase()
    cb(null, `${Date.now()}-${unique}${ext}`)
  },
})

const fileFilter = (_req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase()
  if (!ALLOWED_EXTENSIONS.includes(ext) || !ALLOWED_MIMES.includes(file.mimetype)) {
    return cb(new Error(`Invalid file type: ${file.originalname}. Allowed: PDF, DOC, DOCX, JPG, JPEG, PNG`), false)
  }
  cb(null, true)
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: MAX_FILE_SIZE },
})

// ──────────────────────────────────────────────
// In-memory rate limiter (simple IP-based)
// ──────────────────────────────────────────────
const rateMap = new Map()
function rateLimit(ip) {
  const windowMs = parseInt(RATE_LIMIT_WINDOW_MS, 10)
  const maxReqs = parseInt(RATE_LIMIT_MAX, 10)
  const now = Date.now()
  if (!rateMap.has(ip)) {
    rateMap.set(ip, { count: 1, start: now })
    return { allowed: true }
  }
  const entry = rateMap.get(ip)
  if (now - entry.start > windowMs) {
    entry.count = 1
    entry.start = now
    return { allowed: true }
  }
  entry.count++
  if (entry.count > maxReqs) {
    return { allowed: false, retryAfter: Math.ceil((windowMs - (now - entry.start)) / 1000) }
  }
  return { allowed: true }
}

// ──────────────────────────────────────────────
// Email transporter
// ──────────────────────────────────────────────
function createTransporter() {
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    return nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === 'true',
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  }
  return null
}

// ──────────────────────────────────────────────
// Validate email format
// ──────────────────────────────────────────────
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// ──────────────────────────────────────────────
// POST /api/contact
// ──────────────────────────────────────────────
app.post('/api/contact', (req, res) => {
  // Rate limiting
  const ip = req.ip || req.connection.remoteAddress || 'unknown'
  const rl = rateLimit(ip)
  if (!rl.allowed) {
    return res.status(429).json({ ok: false, error: `Too many requests. Try again in ${rl.retryAfter}s.` })
  }

  // Handle multipart upload with file validation
  upload.single('attachment')(req, res, (err) => {
    // ── Multer errors (file too large, wrong type) ──
    if (err) {
      if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({ ok: false, error: 'File too large. Maximum size is 10 MB.' })
        }
        return res.status(400).json({ ok: false, error: err.message })
      }
      return res.status(400).json({ ok: false, error: err.message })
    }

    const { name, email, phone, message } = req.body
    const file = req.file

    // ── Validate required fields ──
    if (!name || !name.trim()) {
      cleanupFile(file)
      return res.status(400).json({ ok: false, error: 'Name is required.' })
    }
    if (!email || !email.trim()) {
      cleanupFile(file)
      return res.status(400).json({ ok: false, error: 'Email is required.' })
    }
    if (!isValidEmail(email)) {
      cleanupFile(file)
      return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' })
    }

    // ── Duplicate submission detection (simple in-memory) ──
    const dedupKey = `${name.trim().toLowerCase()}|${email.trim().toLowerCase()}`
    if (global._lastSubmission?.[dedupKey] && Date.now() - global._lastSubmission[dedupKey] < 30000) {
      cleanupFile(file)
      return res.status(429).json({ ok: false, error: 'Duplicate submission detected. Please wait before trying again.' })
    }
    if (!global._lastSubmission) global._lastSubmission = {}
    global._lastSubmission[dedupKey] = Date.now()

    // ── Build email ──
    const subject = `Website Enquiry from ${name}`
    const textBody = [
      `New enquiry from FocusOn Interiors website`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone || 'Not provided'}`,
      `Email: ${email}`,
      ``,
      `Message:`,
      message || 'No message provided',
      ``,
      file ? `Attachment: ${file.originalname} (${(file.size / 1024).toFixed(1)} KB)` : '',
      ``,
      `-- Sent from FocusOn Interiors Contact Form`,
    ].join('\n')

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #d43b1a; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Website Enquiry</h1>
        </div>
        <div style="background: #faf9f6; padding: 30px; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333; width: 100px;">Name:</td>
              <td style="padding: 10px 0; color: #555;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Phone:</td>
              <td style="padding: 10px 0; color: #555;">${escapeHtml(phone || 'Not provided')}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 10px 0; color: #555;">
                <a href="mailto:${escapeHtml(email)}" style="color: #d43b1a;">${escapeHtml(email)}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            <h3 style="color: #333; margin: 0 0 10px;">Message:</h3>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message || 'No message provided')}</p>
          </div>
          ${file ? `<div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e5e5;">
            <h3 style="color: #333; margin: 0 0 5px;">Attachment:</h3>
            <p style="color: #555;">${escapeHtml(file.originalname)} (${(file.size / 1024).toFixed(1)} KB)</p>
          </div>` : ''}
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 10px; text-align: center;">
          Sent from FocusOn Interiors website contact form
        </p>
      </div>
    `

    // ── Prepare attachments ──
    const attachments = file
      ? [{ filename: file.originalname, path: file.path }]
      : []

    // ── Send email ──
    const transporter = createTransporter()
    const sendMail = transporter
      ? transporter.sendMail({
          from: SMTP_FROM || `${name} <noreply@focusoninterior.in>`,
          to: TO_EMAIL,
          replyTo: email,
          subject,
          text: textBody,
          html: htmlBody,
          attachments,
        })
      : Promise.resolve()

    sendMail
      .then(() => {
        console.log(`[contact] Email sent to ${TO_EMAIL} from ${name} <${email}>`)
        // Cleanup uploaded file after sending
        cleanupFile(file)
        return res.json({ ok: true, sent: true })
      })
      .catch((error) => {
        console.error('[contact] Email send error:', error)
        cleanupFile(file)
        return res.status(500).json({ ok: false, error: 'Failed to send message. Please try again or email us directly.' })
      })
  })
})

// ──────────────────────────────────────────────
// Health check
// ──────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString(), transporter: SMTP_HOST ? 'configured' : 'not-configured' })
})

// ──────────────────────────────────────────────
// Error handling middleware
// ──────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error('[server] Unhandled error:', err)
  res.status(500).json({ ok: false, error: 'Internal server error.' })
})

// ──────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────
function cleanupFile(file) {
  if (file && file.path && fs.existsSync(file.path)) {
    try { fs.unlinkSync(file.path) } catch { /* ignore */ }
  }
}

function escapeHtml(text) {
  if (!text) return ''
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// ──────────────────────────────────────────────
// Start server
// ──────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  🚀 FocusOn Backend Server running on http://localhost:${PORT}`)
  console.log(`  📧  Sending to: ${TO_EMAIL}`)
  console.log(`  🔧  SMTP: ${SMTP_HOST ? 'configured' : 'NOT configured — emails will be logged only'}`)
  console.log(`  📁  File uploads: up to 10 MB (PDF, DOC, DOCX, JPG, JPEG, PNG)`)
  console.log()
})
