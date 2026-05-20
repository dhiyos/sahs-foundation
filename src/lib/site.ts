export const site = {
  name: "SAHS Foundation",
  url: "https://sahsfoundation.org",
  defaultOgImage: "/og-default.jpg",
  tagline: "Committed to Care · Guided by Integrity · Built for Responsible Impact",
  registration: {
    type: "Registered Non-Profit Trust",
    number: "UP/2022/0307306",
  },
  copyright: "© 2026 SAHS Foundation · An SAHS Group social initiative",
  address: {
    line1: "A 9, SAHS Tower, Sector 49",
    line2: "Noida 201301, Uttar Pradesh, India",
    full: "A 9, SAHS Tower, Sector 49, Noida 201301, Uttar Pradesh, India",
  },
  phones: ["+91 85957 59528", "+91 83688 35695"],
  email: "info@sahsfoundation.org",
  social: {
    handle: "@sahsfoundation",
    // Set `live: true` once the corresponding handle is published.
    instagram: { url: "https://instagram.com/sahsfoundation", live: false },
    facebook:  { url: "https://facebook.com/sahsfoundation",  live: false },
    linkedin:  { url: "https://linkedin.com/company/sahsfoundation", live: false },
    x:         { url: "https://x.com/sahsfoundation",         live: false },
  },
} as const;

export const nav = [
  { to: "/about", label: "About" },
  { to: "/initiatives", label: "Initiatives" },
  { to: "/get-involved", label: "Get Involved" },
] as const;
