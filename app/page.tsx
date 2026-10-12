import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Products } from "@/components/products";
import { Leadership } from "@/components/leadership";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { allProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site";

const orgId = `${siteConfig.url}/#organization`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": orgId,
      name: siteConfig.legalName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon-512.png`,
      image: `${siteConfig.url}/opengraph-image.png`,
      description: siteConfig.description,
      slogan: siteConfig.tagline,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: siteConfig.email,
        areaServed: "IN",
        availableLanguage: "en",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "en-IN",
      publisher: { "@id": orgId },
    },
    {
      "@type": "ItemList",
      name: "Syno Pharma product portfolio",
      itemListElement: allProducts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Drug",
          name: p.name,
          nonProprietaryName: p.generic,
          dosageForm: p.form,
          description: p.description,
          image: `${siteConfig.url}${p.image}`,
          manufacturer: { "@id": orgId },
        },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
