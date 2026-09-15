import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      interest,
      message,
    } = body;

    // Required fields validation
    if (!name || !email || !phone || !message) {
      return Response.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "DevCreatex <onboarding@resend.dev>",

      to: [process.env.CONTACT_EMAIL],

      // User ki email
      // Inbox se Reply karne par reply user ko jayega
      replyTo: email,

      subject: `New Contact Inquiry - ${
        interest || "General Inquiry"
      }`,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 700px;
          margin: 0 auto;
          background: #f8fafc;
          padding: 30px;
          color: #0f172a;
        ">

          <div style="
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            padding: 30px;
          ">

            <h1 style="
              margin: 0 0 8px;
              font-size: 24px;
              color: #0f172a;
            ">
              New Contact Inquiry
            </h1>

            <p style="
              color: #64748b;
              margin: 0 0 30px;
            ">
              A new inquiry has been submitted from the DevCreatex website.
            </p>

            <!-- Name -->
            <div style="margin-bottom: 20px;">
              <strong>Full Name</strong>

              <p style="
                margin: 6px 0 0;
                color: #334155;
              ">
                ${escapeHtml(name)}
              </p>
            </div>

            <!-- Email -->
            <div style="margin-bottom: 20px;">
              <strong>Email</strong>

              <p style="
                margin: 6px 0 0;
                color: #334155;
              ">
                ${escapeHtml(email)}
              </p>
            </div>

            <!-- Phone -->
            <div style="margin-bottom: 20px;">
              <strong>Phone Number</strong>

              <p style="
                margin: 6px 0 0;
                color: #334155;
              ">
                ${escapeHtml(phone)}
              </p>
            </div>

            <!-- Interest -->
            <div style="margin-bottom: 20px;">
              <strong>Interested In</strong>

              <p style="
                margin: 6px 0 0;
                color: #334155;
              ">
                ${escapeHtml(interest || "Not specified")}
              </p>
            </div>

            <!-- Message -->
            <div style="margin-bottom: 20px;">
              <strong>Project Details</strong>

              <div style="
                margin-top: 8px;
                padding: 16px;
                background: #f8fafc;
                border-radius: 10px;
                color: #334155;
                line-height: 1.6;
                white-space: pre-wrap;
              ">
                ${escapeHtml(message)}
              </div>
            </div>

            <!-- Footer -->
            <div style="
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e2e8f0;
            ">
              <p style="
                margin: 0;
                font-size: 13px;
                color: #94a3b8;
              ">
                This inquiry was submitted through the DevCreatex website.
              </p>
            </div>

          </div>
        </div>
      `,
    });

    // Resend error
    if (error) {
      console.error("Resend Error:", error);

      return Response.json(
        {
          success: false,
          message: "Unable to send your inquiry right now.",
        },
        { status: 500 }
      );
    }

    // Success
    return Response.json(
      {
        success: true,
        message: "Your inquiry has been sent successfully.",
        id: data?.id,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API Error:", error);

    return Response.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}


// Escape user input before putting it inside HTML email
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}