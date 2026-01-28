'use server'

export async function sendContactEmail(formData: {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
}) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const TO_EMAIL = process.env.CONTACT_EMAIL || 'info@pacificagriscience.com'

  if (!RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured')
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <noreply@pacificagrisciencehk.com>',
        to: TO_EMAIL,
        reply_to: formData.email,
        subject: `Contact Form: ${formData.subject}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #16a34a; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
                .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #16a34a; }
                .value { margin-top: 5px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>PAHK Inquiry Form Submission</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">${formData.name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">${formData.email}</div>
                  </div>
                  <div class="field">
                    <div class="label">Phone:</div>
                    <div class="value">${formData.phone || 'Not provided'}</div>
                  </div>
                  <div class="field">
                    <div class="label">Company:</div>
                    <div class="value">${formData.company || 'Not provided'}</div>
                  </div>
                  <div class="field">
                    <div class="label">Subject:</div>
                    <div class="value">${formData.subject}</div>
                  </div>
                  <div class="field">
                    <div class="label">Message:</div>
                    <div class="value">${formData.message.replace(/\n/g, '<br>')}</div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('[v0] Resend API error:', error)
      
      // Check if it's a domain verification error
      if (error.includes('verify a domain')) {
        throw new Error('Email domain not verified. Please verify your domain at resend.com/domains or set CONTACT_EMAIL to your Resend account email for testing.')
      }
      
      throw new Error(`Failed to send email: ${error}`)
    }

    const data = await response.json()
    console.log('[v0] Email sent successfully:', data)
    return { success: true, data }
  } catch (error) {
    console.error('[v0] Error sending email:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    }
  }
}
