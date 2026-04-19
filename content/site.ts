export type NavItem = {
  label: string;
  href: string;
};

export const WHATSAPP_AGENT_URL = "https://wa.me/15551234567/?text=Hi%2C%20I%27m%20interested%20in%20buying%20or%20selling%20a%20home";

export const siteConfig = {
  siteName: "Grha Real Estate",
  companyName: "Grha Real Estate",
  tagline: "Premium Properties, Exceptional Service",
  ctaLabel: "Chat with an Agent",
  ctaHref: WHATSAPP_AGENT_URL,
  languages: ["ENGLISH"],
  
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" }
  ] satisfies NavItem[],
  
  account: {
    label: "WhatsApp",
    href: WHATSAPP_AGENT_URL
  },
  
  footer: {
    address: "123 Luxury Lane, Beverly Hills, CA 90210",
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" }
    ],
    partnerLinks: [
      { label: "Client Support", href: "mailto:hello@grharealestate.com" },
      { label: "hello@grharealestate.com", href: "mailto:hello@grharealestate.com" },
      { label: "+1 (555) 123-4567", href: "tel:+15551234567" },
      { label: "Chat on WhatsApp", href: WHATSAPP_AGENT_URL }
    ]
  }
};
