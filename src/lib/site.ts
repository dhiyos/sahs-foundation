export const site = {
  name: "SAHS Foundation",
  url: "https://sahsfoundation.org",
  defaultOgImage: "/og-default.jpg",
  tagline: "Committed to Humanity · Backed by Integrity · Driven by Compassion",
  registration: {
    type: "Registered Non-Profit Trust",
    number: "UP/2022/0307306",
  },
  copyright: "© 2026 SAHS Foundation · A SAHS Group of Companies Initiative",
  address: {
    line1: "A 9, SAHS Tower, Sector 49",
    line2: "Noida 201301, Uttar Pradesh, India",
    full: "A 9, SAHS Tower, Sector 49, Noida 201301, Uttar Pradesh, India",
  },
  phones: ["+91 85957 59528", "+91 83688 35695"],
  email: "info@sahsfoundation.org",
  social: {
    handle: "@sahsfoundation",
    instagram: "https://instagram.com/sahsfoundation",
    facebook: "https://facebook.com/sahsfoundation",
    linkedin: "https://linkedin.com/company/sahsfoundation",
    x: "https://x.com/sahsfoundation",
  },
} as const;

export const nav = [
  { to: "/about", label: "About" },
  { to: "/initiatives", label: "Initiatives" },
  { to: "/impact", label: "Impact" },
  { to: "/get-involved", label: "Get Involved" },
] as const;
