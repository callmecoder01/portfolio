import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import FloatingBlobs from "@/components/effects/FloatingBlobs";
import CursorGlow from "@/components/effects/CursorGlow";
import ThemeProvider from "@/components/ThemeProvider";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-poppins',
  display: 'swap',
});

const siteUrl = "https://sarojsah.info.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saroj Kumar Sah | Full Stack Developer",
    template: "%s | Saroj Kumar Sah",
  },
  description:
    "Full Stack Developer with 3+ years of experience building scalable backend systems with Node.js, NestJS, PostgreSQL, and crafting responsive UIs with React and Next.js. Based in Kathmandu, Nepal.",
  keywords: [
    "Saroj Kumar Sah",
    "Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Node.js Developer",
    "NestJS Developer",
    "React Developer",
    "Next.js Developer",
    "Nepal Developer",
    "Kathmandu Developer",
    "TypeScript",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Portfolio",
  ],
  authors: [{ name: "Saroj Kumar Sah", url: siteUrl }],
  creator: "Saroj Kumar Sah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Saroj Kumar Sah",
    title: "Saroj Kumar Sah | Full Stack Developer",
    description:
      "Full Stack Developer with 3+ years building scalable backends, AI pipelines, and production apps across e-commerce, SaaS, and EdTech.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saroj Kumar Sah - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saroj Kumar Sah | Full Stack Developer",
    description:
      "Full Stack Developer with 3+ years building scalable backends, AI pipelines, and production apps.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saroj Kumar Sah",
    jobTitle: "Full Stack Developer",
    url: siteUrl,
    email: "geeksaroj@gmail.com",
    telephone: "+977-9817627843",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    sameAs: [
      "https://github.com/geek-saroj",
      "https://www.linkedin.com/in/saroj4/",
    ],
    knowsAbout: [
      "Node.js", "NestJS", "React", "Next.js", "TypeScript",
      "PostgreSQL", "MongoDB", "Docker", "AWS", "GCP",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <FloatingBlobs />
          <CursorGlow />
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              className: 'glass-card',
              style: {
                borderRadius: '1rem',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
