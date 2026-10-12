export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://synopharma.in").replace(/\/$/, ""),
  name: "Syno Pharma",
  legalName: "Syno Pharma Laboratories Private Limited",
  title: "Syno Pharma | Ethical, Evidence-Based Healthcare Solutions",
  description:
    "Syno Pharma Laboratories Pvt. Ltd. is a New Delhi pharmaceutical company offering quality gastroenterology, hepatology and nutritional products — including pantoprazole, rifaximin and ursodeoxycholic acid formulations.",
  tagline: "Innovation • Integrity • Impact",
  email: "info@synopharma.in",
  // Web3Forms access keys are public by design: they only allow sending to the inbox they were created for.
  web3formsKey:
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "7c8bee03-bead-4fec-8926-d53eb3a13fac",
  address: {
    street: "2321 Gali No-35, Part-1, Sonia Vihar",
    locality: "New Delhi",
    region: "Delhi",
    postalCode: "110094",
    country: "IN",
  },
  keywords: [
    "Syno Pharma",
    "Syno Pharma Laboratories",
    "pharmaceutical company New Delhi",
    "gastroenterology medicines",
    "hepatology medicines",
    "pantoprazole tablets",
    "rifaximin tablets",
    "ursodeoxycholic acid tablets",
    "pharma distributor India",
  ],
};
