const services = [
  "Web Design",
  "Web Development",
  "Custom Web Apps",
  "Mobile Apps",
  "Digital Marketing",
  "META Ads",
  "TikTok Ads",
  "Google Ads",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0d4d51] border-t border-[#C9A96E]/15 py-20 px-8 md:px-16 overflow-hidden">
      {/* Subtle vertical pinstripes */}
      <div className="absolute inset-0 pinstripe pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <p
                className="font-display text-3xl text-[#F5F0E8] tracking-[0.1em]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                The Tailor
              </p>
              <p className="font-sans text-[0.6rem] tracking-[0.35em] uppercase text-[#C9A96E] mt-1">
                Athens · Greece
              </p>
            </div>
            <p
              className="text-[#EDE8DE]/70 text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Every pixel considered. Every campaign crafted. Bespoke digital
              experiences for brands that demand distinction.
            </p>
            <div className="gold-rule w-16" />
          </div>

          {/* Services */}
          <div>
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#C9A96E] mb-8">
              Our Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="font-sans text-sm text-[#EDE8DE]/70 hover:text-[#C9A96E] transition-colors duration-300 tracking-wide flex items-center gap-2 group"
                  >
                    <span className="h-px w-4 bg-[#C9A96E]/40 group-hover:w-6 group-hover:bg-[#C9A96E] transition-all duration-300" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#C9A96E] mb-8">
              Atelier
            </p>
            <div
              className="space-y-4 text-[#EDE8DE]/70"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              <p className="text-lg">Athens, Greece</p>
              <a
                href="mailto:create@thetailor.gr"
                className="block text-lg hover:text-[#C9A96E] transition-colors duration-300"
              >
                create@thetailor.gr
              </a>
              <a
                href="tel:+302101234567"
                className="block text-lg hover:text-[#C9A96E] transition-colors duration-300"
              >
                +30 698 33 83 257
              </a>
            </div>

            <div className="mt-8 flex gap-4">
              {["IG", "LI", "FB"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-[#C9A96E]/30 flex items-center justify-center font-sans text-[0.6rem] tracking-widest text-[#C9A96E]/60 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#C9A96E]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs tracking-widest text-[#EDE8DE]/30 uppercase">
            © {year} The Tailor. All rights reserved.
          </p>
          <p
            className="text-[#EDE8DE]/30 text-sm italic"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Tailor-Made Digital Experiences
          </p>
        </div>
      </div>
    </footer>
  );
}
