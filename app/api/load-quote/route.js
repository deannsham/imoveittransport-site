import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();

    await resend.emails.send({
      from: "I Move It Transport <quotes@mail.imoveittransport.com>",
      to: ["bramwell@imoveittransport.com"],
      replyTo: data.email,
      subject: `New Load Quote Request from ${data.name || "Website Visitor"}`,
      html: `
        <h2>New Load Quote Request</h2>
        <p><strong>Name:</strong> ${data.name || ""}</p>
        <p><strong>Company:</strong> ${data.company || ""}</p>
        <p><strong>Email:</strong> ${data.email || ""}</p>
        <p><strong>Phone:</strong> ${data.phone || ""}</p>
        <p><strong>Pickup Location:</strong> ${data.pickupLocation || ""}</p>
        <p><strong>Delivery Location:</strong> ${data.deliveryLocation || ""}</p>
        <p><strong>Pickup Date:</strong> ${data.pickupDate || ""}</p>
        <p><strong>Freight Type:</strong> ${data.freightType || ""}</p>
        <p><strong>Shipment Details:</strong><br />${data.shipmentDetails || ""}</p>
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