import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Truepub Media Solution",
};

export default function Home() {
  const MainWrapper = dynamic(
    () => import("@/components/wrappers/main-wrapper"),
    {
      ssr: false,
    }
  );

  const MainSection = dynamic(() => import("@/components/sections/main"), {
    ssr: true,
  });

  const AboutUs = dynamic(() => import("@/components/sections/about-us"), {
    ssr: true,
  });

  const WhatWeDo = dynamic(() => import("@/components/sections/what-we-do"), {
    ssr: true,
  });

  const TeamWork = dynamic(() => import("@/components/sections/teamwork"), {
    ssr: true,
  });

  const PartnersAndBrand = dynamic(
    () => import("@/components/sections/partners-and-brand"),
    {
      ssr: true,
    }
  );

  const Career = dynamic(() => import("@/components/sections/career"), {
    ssr: true,
  });

  const ContactUs = dynamic(() => import("@/components/sections/contact-us"), {
    ssr: true,
  });

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://truepubmedia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://truepubmedia.com/contact-us",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Privacy Policy",
        item: "https://truepubmedia.com/privacy",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Disclaimer",
        item: "https://truepubmedia.com/disclaimer",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "copyright",
        item: "https://truepubmedia.com/Copyright",
      },
    ],
  };

  return (
    <MainWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      ></script>
      <MainSection />
      <AboutUs />
      <WhatWeDo />
      <TeamWork />
      <PartnersAndBrand />
      <Career />
      <ContactUs />
    </MainWrapper>
  );
}
