import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { keywords, knowsAbout, siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords,
  authors: [{ name: "Salah Eldin", url: siteConfig.url.toString() }],
  creator: "Salah Eldin",
  publisher: "Salah Eldin",
  applicationName: siteConfig.shortName,
  generator: "Next.js",
  category: "technology",
  referrer: "strict-origin-when-cross-origin",

  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.shortName,
    locale: "en_US",
    type: "website",
    images: [{
      url: "/home.png",
      width: 1200,
      height: 630,
      alt: "Salah Eldin Portfolio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{
      url: "/home.png",
      width: 1200,
      height: 630,
      alt: "Salah Eldin Portfolio",
    },],
    creator: "@salaheldin404",
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE,
  },
};
const siteUrl = siteConfig.url.toString();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: "Salah Eldin",
      url: siteUrl,
      description: siteConfig.description,
      jobTitle: "Full Stack Developer",
      email: `mailto:${siteConfig.email}`,
      image: `${siteUrl}${siteConfig.image}`,
      sameAs: [
        siteConfig.github,
        siteConfig.linkedin,
      ],
      knowsAbout,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        "name": "Zagazig University",
      },
      nationality: {
        "@type": "Country",
        "name": "Egypt",
      }
    }, {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en",
      author: {
        "@id": `${siteUrl}#person`,
      },
      publisher: {
        "@id": `${siteUrl}#person`,
      },
      mainEntity: {
        "@id": `${siteUrl}#person`,
      },
    }]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning

    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <Navbar />
            <main>{children}</main>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
