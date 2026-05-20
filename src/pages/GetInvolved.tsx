import { Mail, Phone, MapPin } from "lucide-react";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Button } from "../components/ui/Button";
import { Hero } from "../components/sections/Hero";
import { PartnerForm } from "../components/forms/PartnerForm";
import { VolunteerForm } from "../components/forms/VolunteerForm";
import { getInvolved } from "../lib/content";
import { site } from "../lib/site";

const pathwayStyles = {
  coral: { bg: "bg-coral-600", buttonClass: "bg-white text-coral-700 hover:bg-white/90" },
  teal:  { bg: "bg-teal-700",  buttonClass: "bg-white text-teal-700  hover:bg-white/90" },
  navy:  { bg: "bg-navy-900",  buttonClass: "bg-white text-navy-900  hover:bg-white/90" },
} as const;

const mapEmbed =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(site.address.full) +
  "&output=embed";

const referMailto = `mailto:${site.email}?subject=${encodeURIComponent("Refer a Need")}`;

export default function GetInvolved() {
  return (
    <>
      <Seo
        title="Get Involved"
        description="Partner with SAHS Foundation, volunteer your time, or refer a need from your community."
        path="/get-involved"
      />
      <Hero
        variant="dark"
        size="md"
        decoration
        eyebrow={getInvolved.hero.eyebrow}
        headline={getInvolved.hero.headline}
        sub={getInvolved.hero.sub}
      />

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getInvolved.pathways.map((p) => {
              const styles = pathwayStyles[p.tone];
              return (
                <a
                  key={p.key}
                  href={p.to}
                  className={`${styles.bg} rounded-md p-8 text-white flex flex-col gap-6 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-offset-2`}
                >
                  <div className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/70">
                    {p.heading}
                  </div>
                  <p className="font-serif text-[22px] md:text-[24px] leading-snug font-medium flex-1">
                    {p.body}
                  </p>
                  <span
                    className={`inline-flex items-center justify-center px-5 py-2.5 rounded text-sm font-medium tracking-wide self-start transition ${styles.buttonClass}`}
                  >
                    {p.label}
                  </span>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="partner" className="bg-cream-50 py-16 md:py-24 scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <Eyebrow>PARTNER</Eyebrow>
              <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-ink-900 leading-tight mb-5">
                {getInvolved.partner.heading}
              </h2>
              <p className="text-base text-ink-600 leading-[1.7]">
                {getInvolved.partner.body}
              </p>
            </div>
            <div className="md:col-span-7">
              <PartnerForm />
            </div>
          </div>
        </Container>
      </section>

      <section id="volunteer" className="bg-white py-16 md:py-24 scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <Eyebrow>VOLUNTEER</Eyebrow>
              <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-ink-900 leading-tight mb-5">
                {getInvolved.volunteer.heading}
              </h2>
              <p className="text-base text-ink-600 leading-[1.7]">
                {getInvolved.volunteer.body}
              </p>
            </div>
            <div className="md:col-span-7">
              <VolunteerForm />
            </div>
          </div>
        </Container>
      </section>

      <section id="refer" className="bg-cream-50 py-16 md:py-24 scroll-mt-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>REFER A NEED</Eyebrow>
            <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-ink-900 leading-tight mb-5">
              {getInvolved.refer.heading}
            </h2>
            <p className="text-base text-ink-600 leading-[1.7] mb-8">
              {getInvolved.refer.body}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={referMailto} variant="primary">
                Email Us a Referral
              </Button>
              <Button href="#contact" variant="secondary">
                Other Ways to Reach Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="bg-navy-900 py-16 md:py-24 scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div>
              <div className="text-[11px] font-medium tracking-[0.25em] uppercase text-coral-400 mb-3">
                CONTACT
              </div>
              <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-white leading-tight mb-8">
                Reach out — we read every message.
              </h2>
              <ul className="space-y-5 text-white/85">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 shrink-0 text-white/60" strokeWidth={2} />
                  <div>
                    <div className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/55 mb-1">
                      Address
                    </div>
                    <div className="text-sm leading-relaxed">{site.address.full}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-1 shrink-0 text-white/60" strokeWidth={2} />
                  <div>
                    <div className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/55 mb-1">
                      Phone / WhatsApp
                    </div>
                    <div className="text-sm leading-relaxed flex flex-col">
                      {site.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s+/g, "")}`}
                          className="hover:text-white focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-offset-2 focus:ring-offset-navy-900 rounded-sm"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-1 shrink-0 text-white/60" strokeWidth={2} />
                  <div>
                    <div className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/55 mb-1">
                      Email
                    </div>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-offset-2 focus:ring-offset-navy-900 rounded-sm"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-md overflow-hidden border border-white/10 min-h-[320px]">
              <iframe
                src={mapEmbed}
                title={`Map showing ${site.address.full}`}
                loading="lazy"
                className="w-full h-full min-h-[320px] border-0"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
