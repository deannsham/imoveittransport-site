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

export default function BrokerContactForm() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/broker-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error("Unable to send broker inquiry.");
      }

      form.reset();
      setStatus({ type: "success", message: "Broker inquiry sent successfully." });
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Field label="Broker / Company Name" name="brokerCompany" placeholder="Broker or company name" required />
      <Field label="Contact Name" name="contactName" placeholder="Contact person" required />
      <Field label="Email" name="email" type="email" placeholder="broker@example.com" required />
      <Field label="Phone" name="phone" placeholder="Contact phone number" />
      <TextArea label="Message" name="message" placeholder="Tell us about the lane, freight, or partnership opportunity" required />
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl px-6 py-4 text-white font-semibold hover:opacity-90 transition disabled:opacity-60"
        style={{ backgroundColor: "#0E3F93" }}
      >
        {loading ? "Sending..." : "Send Broker Inquiry"}
      </button>
      {status.message ? (
        <div className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {status.message}
        </div>
      ) : null}
    </form>
  );
}