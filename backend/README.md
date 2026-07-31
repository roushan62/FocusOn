# FocusOn Backend — Contact Form & File Upload

Free backend server that receives contact form submissions (with file attachments) and emails them to **info@focusoninterior.in**.

---

## 🚀 Deploy on Render (Free — 5 minutes)

### Step 1: Push this repo to GitHub
```bash
git add .
git commit -m "Add backend"
git push
```

### Step 2: Create a Render account
1. Go to **[render.com](https://render.com)** → Sign up with GitHub (free, no credit card)
2. Click **New +** → **Web Service**
3. Connect your GitHub repo → Select `FocusOn`

### Step 3: Configure the service
| Setting | Value |
|---------|-------|
| **Name** | `focuson-backend` |
| **Root Directory** | `backend` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `node server.js` |
| **Plan** | **Free** |

### Step 4: Add Environment Variables
Click **Environment** tab and add these:

| Variable | Value |
|----------|-------|
| `SMTP_HOST` | `smtp.rediffmail.com` |
| `SMTP_PORT` | `25` |
| `SMTP_USER` | `yourname@rediffmail.com` (full email) |
| `SMTP_PASS` | Your Rediffmail password |
| `SMTP_FROM` | `FocusOn Interiors <yourname@rediffmail.com>` |
| `TO_EMAIL` | `info@focusoninterior.in` |
| `ALLOWED_ORIGINS` | `https://roushan62.github.io,https://focusoninteriors.com` |

> ⚠️ **Rediffmail FREE users**: Use `smtp.rediffmail.com` port `25`  
> ⚠️ **Rediffmail PRO users**: Use `smtp.rediffmailpro.com` port `587`

### Step 5: Connect Frontend
After deploy, Render gives you a URL like:
```
https://focuson-backend.onrender.com
```

Update this line in `components/contact-form.tsx`:
```js
const CONTACT_API_URL = 'https://focuson-backend.onrender.com/api/contact'
```

Then rebuild and redeploy your Next.js frontend.

---

## 📧 Local Development
```bash
cd backend
cp .env.example .env   # Edit .env with your Rediffmail details
npm install
npm run dev
```

Server runs at `http://localhost:3001`. Test it:
```bash
curl -X POST http://localhost:3001/api/contact \
  -F "name=Test User" \
  -F "email=test@example.com" \
  -F "message=Hello from curl"
```

---

## 📁 API Reference

### POST /api/contact
`multipart/form-data`

| Field | Required | Description |
|-------|----------|-------------|
| `name` | ✅ | Full name |
| `email` | ✅ | Email address |
| `phone` | ❌ | Phone number |
| `message` | ❌ | Your message |
| `attachment` | ❌ | File (PDF/DOC/DOCX/JPG/PNG, ≤10MB) |

✅ **Success:** `{ "ok": true, "sent": true }` — Email sent to info@focusoninterior.in  
❌ **Error:** `{ "ok": false, "error": "..." }`  

---

## 🔒 Security
- Rate limited: max 10 submissions per IP per minute
- Duplicate detection: same name+email blocked for 30s
- File type & size validated before upload
- Uploads auto-deleted after sending
- Input sanitised for HTML email
- No secret keys exposed in frontend
