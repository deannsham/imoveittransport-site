import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();

    await resend.emails.send({
      from: "I Move It Transport <quotes@mail.imoveittransport.com>",
      to: ["bramwell@imoveittransport.com"],
      replyTo: data.email,
      subject: `New Broker Inquiry from ${data.contactName || "Website Visitor"}`,
      html: `
        <h2>New Broker Inquiry</h2>
        <p><strong>Broker / Company:</strong> ${data.brokerCompany || ""}</p>
        <p><strong>Contact Name:</strong> ${data.contactName || ""}</p>
        <p><strong>Email:</strong> ${data.email || ""}</p>
        <p><strong>Phone:</strong> ${data.phone || ""}</p>
        <p><strong>Message:</strong><br />${data.message || ""}</p>
      `
    });

    return Response.json({ ok: true });
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: "Email send failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}