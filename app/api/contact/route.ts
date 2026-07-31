import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function createTransporter() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }
  return null
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || ''
    let name: string, email: string, phone: string, message: string, fileBuffer: Buffer | null, fileName: string, fileType: string

    if (contentType.includes('multipart/form-data')) {
      // ── Handle file upload via FormData ──
      const formData = await request.formData()
      name = (formData.get('name') as string) || ''
      email = (formData.get('email') as string) || ''
      phone = (formData.get('phone') as string) || ''
      message = (formData.get('message') as string) || ''
      const file = formData.get('attachment') as File | null
      if (file && file.size > 0) {
        const allowedMimes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png']
        const maxSize = 10 * 1024 * 1024
        if (!allowedMimes.includes(file.type)) {
          return NextResponse.json({ ok: false, error: 'Invalid file type. Allowed: PDF, DOC, DOCX, JPG, PNG.' }, { status: 400 })
        }
        if (file.size > maxSize) {
          return NextResponse.json({ ok: false, error: 'File too large. Maximum size is 10 MB.' }, { status: 400 })
        }
        fileBuffer = Buffer.from(await file.arrayBuffer())
        fileName = file.name
        fileType = file.type
      } else {
        fileBuffer = null
        fileName = ''
        fileType = ''
      }
    } else {
      // ── Legacy JSON support ──
      const body = await request.json()
      name = body.name ?? ''
      email = body.email ?? ''
      phone = body.phone ?? ''
      message = body.message ?? ''
      fileBuffer = null
      fileName = ''
      fileType = ''
    }

    // ── Validation ──
    if (!name || !name.trim()) {
      return NextResponse.json({ ok: false, error: 'Name is required.' }, { status: 400 })
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ ok: false, error: 'Email is required.' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 })
    }

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
      fileName ? `Attachment: ${fileName}` : '',
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
              <td style="padding: 10px 0; color: #555;"><a href="mailto:${escapeHtml(email)}" style="color: #d43b1a;">${escapeHtml(email)}</a></td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            <h3 style="color: #333; margin: 0 0 10px;">Message:</h3>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message || 'No message provided')}</p>
          </div>
          ${fileName ? `<div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e5e5;"><h3 style="color: #333; margin: 0 0 5px;">Attachment:</h3><p style="color: #555;">${escapeHtml(fileName)}</p></div>` : ''}
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 10px; text-align: center;">Sent from FocusOn Interiors website contact form</p>
      </div>
    `

    const attachments = fileBuffer
      ? [{ filename: fileName, content: fileBuffer, contentType: fileType }]
      : []

    const transporter = createTransporter()
    if (transporter) {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || name,
        to: 'info@focusoninterior.in',
        replyTo: email,
        subject,
        text: textBody,
        html: htmlBody,
        attachments,
      })
      console.log('[contact] email sent to info@focusoninterior.in', { name, email })
      return NextResponse.json({ ok: true, sent: true })
    }

    console.log('[contact] SMTP not configured — enquiry logged', { name, email, phone, message })
    return NextResponse.json({ ok: true, sent: false, note: 'SMTP not configured. Mailto fallback will be used.' })
  } catch (error) {
    console.error('[contact] error:', error)
    return NextResponse.json({ ok: false, error: 'Failed to process request.' }, { status: 500 })
  }
}

function escapeHtml(text: string) {
  if (!text) return ''
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
}
