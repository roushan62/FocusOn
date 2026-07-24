import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email } = body ?? {}

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: 'Name and email are required.' },
        { status: 400 },
      )
    }

    // Log the enquiry server-side. Hook up an email/CRM provider here
    // (e.g. Resend, Nodemailer, or a webhook) when credentials are available.
    console.log('[contact] enquiry received', {
      name,
      email,
      phone: body.phone ?? '',
      message: body.message ?? '',
      at: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request.' },
      { status: 400 },
    )
  }
}
