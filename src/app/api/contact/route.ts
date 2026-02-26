import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, services, message } = body as {
      name: string;
      email: string;
      services: string[];
      message: string;
    };

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const servicesText =
      services && services.length > 0 ? services.join(", ") : "None selected";

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Consultation Request</title>
</head>
<body style="margin:0;padding:0;background-color:#0d4d51;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d4d51;padding:48px 24px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#1a7a7e;border:1px solid rgba(201,169,110,0.2);">
          <!-- Header -->
          <tr>
            <td style="padding:40px 48px 32px;border-bottom:1px solid rgba(201,169,110,0.15);">
              <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:#C9A96E;">
                The Tailor
              </p>
              <h1 style="margin:0;font-size:28px;font-weight:400;color:#F5F0E8;line-height:1.3;">
                New Consultation Request
              </h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:36px 48px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#C9A96E;">
                      Name
                    </p>
                    <p style="margin:0;font-size:18px;color:#F5F0E8;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#C9A96E;">
                      Email
                    </p>
                    <p style="margin:0;font-size:18px;color:#F5F0E8;">
                      <a href="mailto:${email}" style="color:#C9A96E;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#C9A96E;">
                      Services Requested
                    </p>
                    <p style="margin:0;font-size:18px;color:#F5F0E8;">${servicesText}</p>
                  </td>
                </tr>
                ${
                  message?.trim()
                    ? `<tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#C9A96E;">
                      Project Description
                    </p>
                    <p style="margin:0;font-size:18px;color:#EDE8DE;line-height:1.7;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>`
                    : ""
                }
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 48px 36px;border-top:1px solid rgba(201,169,110,0.15);">
              <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:rgba(237,232,222,0.4);letter-spacing:1px;">
                Sent via thetailor.gr contact form
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    const { error } = await resend.emails.send({
      // Use onboarding@resend.dev during development (before domain is verified).
      // Once thetailor.gr is verified in Resend, change to: noreply@thetailor.gr
      from: "The Tailor Website <onboarding@resend.dev>",
      to: "create@thetailor.gr",
      replyTo: email,
      subject: `New consultation request from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
