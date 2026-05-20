import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "../ui/Container";
import { Logo } from "./Logo";
import { site } from "../../lib/site";

const SOCIAL = [
  { entry: site.social.instagram, label: "Instagram", Icon: Instagram },
  { entry: site.social.facebook,  label: "Facebook",  Icon: Facebook },
  { entry: site.social.linkedin,  label: "LinkedIn",  Icon: Linkedin },
  { entry: site.social.x,         label: "X",         Icon: Twitter },
].filter((s) => s.entry.live);

const headingClass =
  "text-[11px] font-medium tracking-[0.25em] uppercase text-teal-600 mb-5";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <Logo tone="light" className="text-[26px]" />
            <p className="font-serif italic text-white/75 text-[15px] leading-relaxed mt-5 max-w-sm">
              {site.tagline}
            </p>
            <div className="mt-6 flex items-start gap-3 text-sm text-white/70 leading-relaxed">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={2} />
              <span>
                {site.address.line1},<br />
                {site.address.line2}
              </span>
            </div>
          </div>

          <div>
            <h2 className={headingClass}>Connect</h2>
            <ul className="space-y-3 text-sm text-white/80">
              {site.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white/60" strokeWidth={2} />
                  <a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-offset-2 focus:ring-offset-navy-900 rounded-sm" href={`tel:${phone.replace(/\s+/g, "")}`}>
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/60" strokeWidth={2} />
                <a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-offset-2 focus:ring-offset-navy-900 rounded-sm" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>Follow</h2>
            <p className="text-sm text-white/70">
              {site.social.handle} on all platforms
            </p>
            {SOCIAL.length > 0 && (
              <div className="mt-4 flex items-center gap-3">
                {SOCIAL.map(({ entry, label, Icon }) => (
                  <a
                    key={label}
                    href={entry.url}
                    aria-label={label}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-offset-2 focus:ring-offset-navy-900"
                  >
                    <Icon className="w-4 h-4" strokeWidth={2} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-[12px] tracking-wide text-white/55">
          <p>
            {site.registration.type} · Reg. No: {site.registration.number}
          </p>
          <p>{site.copyright}</p>
        </Container>
      </div>
    </footer>
  );
}
