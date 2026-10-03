export const site = {
  name: "Sadia Mahmud",
  location: "Dhaka, Bangladesh",
  email: "contact.sadiamahmud@gmail.com",
  resumeUrl: "https://rxresu.me/sadia.mahmud.027/sadia-mahmud",
  dribbbleUrl: "https://dribbble.com/Sadia_Mahmud",
  xUrl: "https://x.com/sadia54886213",
};

export const routes = {
  home: "/",
  work: "/work",
  inboxswipe: "/work/inboxswipe",
  selise: "/work/selise-legal-templates",
  terra: "/work/terra",
};

export type FooterLink = { label: string; href: string; external?: boolean };

export const footerLinks = {
  home: [
    { label: "Work", href: routes.work },
    { label: "FAQ", href: "#faq" },
    { label: "Dribbble", href: site.dribbbleUrl, external: true },
    { label: "Back to top ↑", href: "#main" },
  ],
  work: [
    { label: "Home", href: routes.home },
    { label: "Dribbble", href: site.dribbbleUrl, external: true },
    { label: "Email", href: `mailto:${site.email}` },
  ],
  caseStudy: [
    { label: "Home", href: routes.home },
    { label: "Work", href: routes.work },
    { label: "Dribbble", href: site.dribbbleUrl, external: true },
    { label: "Email", href: `mailto:${site.email}` },
  ],
} satisfies Record<string, FooterLink[]>;
