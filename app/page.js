import BrokerContactForm from "./components/BrokerContactForm";
import LoadQuoteForm from "./components/LoadQuoteForm";
import Image from "next/image";

export default function HomePage() {
  const structuredData = {
  "@context": "https://schema.org",
  "@type": "TransportationService",
  name: "I Move It Transport",
  areaServed: "United States",
  provider: {
    "@type": "Organization",
    name: "I Move It Transport",
    url: "https://www.imoveittransport.com"
  },
  identifier: [
    {
      "@type": "PropertyValue",
      name: "USDOT",
      value: "4539899"
    },
    {
      "@type": "PropertyValue",
      name: "MC",
      value: "1801432"
    }
  ]
};
  return (
    <div className="min-h-screen bg-white text-slate-900">
     <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-10">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <Image
        src="/logo.png"
        alt="I Move It Transport"
        width={160}
        height={50}
      />
      <div>
        <div className="text-xl font-bold tracking-tight">I Move It Transport</div>
        <div className="text-sm text-slate-500">
          Houston-based expedited freight with nationwide interstate service.
        </div>
      </div>
    </div>

    <a
      href="#load-quote"
      className="rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
      style={{ backgroundColor: "#0E3F93" }}
    >
      Request Load Quote
    </a>
  </div>
</header>

<div className="mt-8 p-6 rounded-2xl border bg-white shadow-sm">
  <h3 className="font-semibold text-lg mb-3">Carrier Authority</h3>

  <div className="space-y-1 text-sm">
    <div><strong>Company:</strong> I Move It Transport</div>
    <div><strong>USDOT:</strong> 4539899</div>
    <div><strong>MC:</strong> 1801432</div>
    <div><strong>Service Type:</strong> Expedited Cargo Van Freight</div>
    <div><strong>Coverage:</strong> Interstate (Nationwide)</div>
  </div>
</div>
{/*}
<a
  href="/broker-packet.pdf"
  className="inline-block mt-4 px-6 py-3 rounded-xl text-white"
  style={{ backgroundColor: "#0E3F93" }}
>
  Download Carrier Packet
</a>
*/}
      <main>
        <div className="max-w-6xl mx-auto px-6 pt-8">
          <Image
           src="/banner.png"
           alt="Cargo transport"
           width={1600}
           height={600}
           className="w-full h-auto rounded-[2rem] shadow-sm"
           />
</div>
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 mb-6">
              Houston-based transport solutions with nationwide interstate service
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Professional cargo van transport from Houston to destinations nationwide.
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
              I Move It Transport provides reliable, professional transportation services for urgent and dedicated freight. Based in the Houston, Texas area and operating nationally, we focus on clear communication, careful handling, and on-time delivery you can count on.
            </p>
              <div className="mt-8 p-6 rounded-2xl border bg-white shadow-sm max-w-xl">
                <h3 className="font-semibold text-lg mb-3">Carrier Authority</h3>

                <div className="space-y-1 text-sm">
                  <div><strong>Company:</strong> I Move It Transport</div>
                  <div><strong>USDOT:</strong> 4539899</div>
                  <div><strong>MC:</strong> 1801432</div>
                  <div><strong>Service Type:</strong> Expedited Cargo Van Freight</div>
                  <div><strong>Coverage:</strong> Interstate (Nationwide)</div>
                </div>
                {/*
                <a
                  href="/broker-packet.pdf"
                  className="inline-block mt-4 px-6 py-3 rounded-xl text-white"
                  style={{ backgroundColor: "#0E3F93" }}
                >
                  Download Carrier Packet
                </a>
                */}
</div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#load-quote"
                className="rounded-2xl px-6 py-4 text-white font-semibold text-center shadow-sm hover:opacity-90 transition"
                style={{ backgroundColor: "#0E3F93" }}
              >
                Request Load Quote
              </a>
              <a
                href="#broker-contact"
                className="rounded-2xl border px-6 py-4 font-semibold text-center transition"
                style={{ borderColor: "#0E3F93", color: "#0E3F93" }}
              >
                Broker Contact
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg text-sm">
              <div>
                <div className="text-2xl font-bold" style={{ color: "#0E3F93" }}>Houston-Based</div>
                <div className="text-slate-500 mt-1">Serving the greater Houston area</div>
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: "#0E3F93" }}>Interstate</div>
                <div className="text-slate-500 mt-1">Operating nationally</div>
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: "#0E3F93" }}>USDOT / MC</div>
                <div className="text-slate-500 mt-1">Active carrier identifiers displayed</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <div className="rounded-full px-4 py-2 border border-slate-200 bg-white shadow-sm">
                <span className="font-semibold">USDOT:</span> 4539899
              </div>
              <div className="rounded-full px-4 py-2 border border-slate-200 bg-white shadow-sm">
                <span className="font-semibold">MC:</span> 1801432
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div
                className="rounded-[1.5rem] bg-white p-8 shadow-sm border border-slate-100"
                style={{ boxShadow: "0 8px 24px rgba(14,63,147,0.08)" }}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "#0E3F93" }}>
                  Why choose us
                </div>
                <div className="mt-6 space-y-5">
                  <div>
                    <div className="font-semibold text-lg">Expedited transport</div>
                    <div className="text-slate-600 mt-1">
                      Ideal for urgent shipments that need direct, efficient delivery across Houston and nationwide.
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Clear communication</div>
                    <div className="text-slate-600 mt-1">
                      We keep customers informed throughout pickup, transit, and delivery with responsive, professional communication.
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Customer-first service</div>
                    <div className="text-slate-600 mt-1">
                      Every load is handled with professionalism, care, and attention to detail.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-slate-200" style={{ backgroundColor: "#FFF9E6" }}>
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "#0E3F93" }}>
                Services
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                Transport services built around reliability.
              </h2>
              <p className="mt-4 text-slate-600 text-lg leading-8">
                Simple, dependable transportation services designed to help customers move urgent freight with confidence.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Expedited Freight",
                  text: "Priority transport for shipments that need quick pickup and direct delivery."
                },
                {
                  title: "Dedicated Runs",
                  text: "Consistent transportation support for repeat lanes, recurring freight, and business needs."
                },
                {
                  title: "Professional Handling",
                  text: "Careful service with an emphasis on safety, communication, and dependability."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] bg-white border border-slate-200 p-8 shadow-sm"
                  style={{ boxShadow: "0 8px 24px rgba(14,63,147,0.06)" }}
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-slate-600 leading-7">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "#0E3F93" }}>
                About
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                A transport company focused on service and trust.
              </h2>
              <p className="mt-6 text-slate-600 text-lg leading-8">
                I Move It Transport is committed to delivering dependable transportation solutions with professionalism and integrity. Whether you need urgent freight moved quickly in the Houston area or dependable interstate support across the country, we aim to make the process smooth and stress-free.
              </p>
            </div>

            <div
              className="rounded-[2rem] border border-slate-200 p-8 shadow-sm bg-white"
              style={{ boxShadow: "0 8px 24px rgba(14,63,147,0.06)" }}
            >
              <h3 className="text-xl font-semibold">What customers care about most</h3>
              <div className="mt-6 space-y-4 text-slate-600">
                <div className="flex gap-3"><span>✓</span><span>Quick response times</span></div>
                <div className="flex gap-3"><span>✓</span><span>Dependable pickup and delivery</span></div>
                <div className="flex gap-3"><span>✓</span><span>Professional communication</span></div>
                <div className="flex gap-3"><span>✓</span><span>Careful handling of every shipment</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "#0E3F93" }}>
                Service Area
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                Houston-based carrier with nationwide reach.
              </h2>
              <p className="mt-4 text-slate-600 text-lg leading-8 max-w-xl">
                Based in the Houston, Texas area, I Move It Transport supports interstate freight needs across the United States.
              </p>
            </div>

            <div
              className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm"
              style={{ boxShadow: "0 8px 24px rgba(14,63,147,0.06)" }}
            >
              <h2 className="text-2xl font-bold mb-6">
                   Service Area
              </h2>

<p className="text-slate-600 mb-8 max-w-xl">
  Based in the Houston, Texas area, I Move It Transport provides expedited cargo
  van transportation throughout Texas and across the United States.
</p>
              <iframe
                title="I Move It Transport service area map"
                src={`https://www.google.com/maps/embed/v1/view?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY}&center=31.0,-97.0&zoom=5`}
                width="100%"
                height="340"
                style={{ border: 0, borderRadius: "1.5rem" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="broker-contact" className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "#0E3F93" }}>
                Broker Contact
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                A professional contact section built for brokers and shippers.
              </h2>
              <p className="mt-4 text-slate-600 text-lg leading-8 max-w-xl">
                Make it easy for brokers, dispatchers, and shipping partners to verify your authority details and reach out quickly for freight opportunities.
              </p>
              <div
                className="mt-8 rounded-[1.5rem] border border-slate-200 p-6 bg-white shadow-sm"
                style={{ boxShadow: "0 8px 24px rgba(14,63,147,0.06)" }}
              >
                <div className="font-semibold text-lg">Carrier Information</div>
                <div className="mt-4 space-y-3 text-slate-700">
                  <div><span className="font-semibold">Company:</span> I Move It Transport</div>
                  <div><span className="font-semibold">Phone:</span> 347-206-4192</div>
                  <div><span className="font-semibold">Email:</span> bramwell@imoveittransport.com</div>
                  <div><span className="font-semibold">USDOT:</span> 4539899</div>
                  <div><span className="font-semibold">MC:</span> 1801432</div>
                  <div><span className="font-semibold">Base:</span> Houston, Texas area</div>
                  <div><span className="font-semibold">Coverage:</span> Interstate service nationwide</div>
                </div>
              </div>
            </div>

            <div
              className="rounded-[2rem] bg-white text-slate-900 p-8 shadow-sm border border-slate-200"
              style={{ boxShadow: "0 8px 24px rgba(14,63,147,0.06)" }}
            >
              <BrokerContactForm />
            </div>
          </div>
        </section>

        <section id="load-quote" className="text-white" style={{ backgroundColor: "#0E3F93" }}>
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "#F2D573" }}>
                Request Load Quote
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                Tell us about your shipment and route.
              </h2>
              <p className="mt-4 text-slate-300 text-lg leading-8 max-w-xl">
                Use this form for load quote requests, shipment details, pickup and delivery information, or urgent freight inquiries. Based in the Houston, Texas area, we provide interstate service nationwide.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white text-slate-900 p-8 shadow-sm">
              <LoadQuoteForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm text-slate-500">
          <div>© 2026 I Move It Transport</div>
          <div className="flex flex-col md:items-end">
            <div>www.imoveittransport.com</div>
            <div>USDOT 4539899 • MC 1801432</div>
            <div>347-206-4192 • bramwell@imoveittransport.com</div>
          </div>
        </div>
      </footer>
    </div>
  );
}