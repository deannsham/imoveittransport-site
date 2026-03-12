"use client";

import { useState } from "react";

function Field({ label, name, type = "text", placeholder, required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
        placeholder={placeholder}
      />
    </div>
  );
}

function TextArea({ label, name, placeholder, required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <textarea
        name={name}
        required={required}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 min-h-[120px]"
        placeholder={placeholder}
      />
    </div>
  );
}

export default function LoadQuoteForm() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/load-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error("Unable to send quote request.");
      }

      form.reset();
      setStatus({ type: "success", message: "Quote request sent successfully." });
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="rounded-xl p-4" style={{ backgroundColor: "#FFF9E6" }}>
        <div className="font-semibold" style={{ color: "#0E3F93" }}>Carrier Contact Information</div>
        <div className="mt-2 text-sm text-slate-700">Phone: 347-206-4192</div>
        <div className="text-sm text-slate-700">Email: bramwell@imoveittransport.com</div>
        <div className="text-sm text-slate-700">Service Area: Houston, Texas area • Interstate service nationwide</div>
      </div>

      <Field label="Name" name="name" placeholder="Your name" required />
      <Field label="Company" name="company" placeholder="Company name" />

      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
        <Field label="Phone" name="phone" placeholder="Your phone number" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Pickup Location" name="pickupLocation" placeholder="City, State" required />
        <Field label="Delivery Location" name="deliveryLocation" placeholder="City, State" required />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Pickup Date" name="pickupDate" placeholder="Requested pickup date" />
        <Field label="Freight Type" name="freightType" placeholder="Pallets, boxes, expedited freight, etc." />
      </div>

      <TextArea
        label="Shipment Details"
        name="shipmentDetails"
        placeholder="Include dimensions, weight, urgency, special handling, and any quote details"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl px-6 py-4 text-white font-semibold hover:opacity-90 transition disabled:opacity-60"
        style={{ backgroundColor: "#0E3F93" }}
      >
        {loading ? "Sending..." : "Request Quote"}
      </button>

      {status.message ? (
        <div className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {status.message}
        </div>
      ) : null}
    </form>
  );
}