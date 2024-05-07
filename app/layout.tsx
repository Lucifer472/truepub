import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Navigation } from "@/components/navigation/navigation";
import { JobOpening } from "@/components/views/job";
import dynamic from "next/dynamic";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  keywords:
    "web development, True Pub media, Responsive design, Digital advertising",
  description:
    "Welcome to True Pub Media Solutions, your one-stop destination for cutting-edge website development and impactful social media marketing strategies. From sleek, user-friendly websites tailored to your brand's identity, to targeted social media campaigns that drive engagement and growth, we're here to elevate your online presence to new heights. Let's craft your digital success story together!",
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    type: "website",
    title: "True Pub Media Solution",
    description:
      "Welcome to True Pub Media Solutions, your one-stop destination for cutting-edge website development and impactful social media marketing strategies. From sleek, user-friendly websites tailored to your brand's identity, to targeted social media campaigns that drive engagement and growth, we're here to elevate your online presence to new heights. Let's craft your digital success story together!",
    url: new URL("https://truepubmedia.com"),
    images: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Navbar = dynamic(() => import("@/components/navigation/navbar"), {
    ssr: true,
  });

  const ClientWrappers = dynamic(
    () => import("@/components/wrappers/client-wrapper"),
    {
      ssr: false,
    }
  );

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="w-full h-full relative bg-background-color text-white font-medium">
          <JobOpening />
          <Navbar />
          <ClientWrappers>
            <Navigation />
          </ClientWrappers>
          {children}
        </main>
      </body>
    </html>
  );
}
