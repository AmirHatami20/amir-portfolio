import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import Header from "@/components/layout/Header";
import PageTransition from "@/components/pageTransition/PageTransition";
import StairTransition from "@/components/pageTransition/StairTransition";

const SITE_URL = "https://amir-htm.ir";
const SITE_NAME = "Amir Hatami";
const PERSON_NAME_FA = "امیررضا حاتمی";
const PERSON_NAME_EN = "Amirreza Hatami";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Amir Hatami | Full-Stack JavaScript Developer in Iran",
    template: "%s | Amir Hatami",
  },

  description:
    "Amir Hatami is a Full-Stack JavaScript Developer from Iran specializing in React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, and web application security.",

  keywords: [
    "Amir Hatami",
    "Amirreza Hatami",
    "امیررضا حاتمی",
    "امیر حاتمی",
    "Full-Stack Developer",
    "Full-Stack JavaScript Developer",
    "توسعه دهنده فول استک",
    "توسعه دهنده وب",
    "برنامه نویس وب",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Iran",
    "Full Stack Developer Iran",
    "React Developer Iran",
    "Next.js Developer Iran",
    "توسعه دهنده React",
    "برنامه نویس Next.js",
    "برنامه نویس Node.js",
    "Web Security",
    "Application Security",
  ],

  authors: [
    {
      name: PERSON_NAME_EN,
      url: SITE_URL,
    },
  ],

  creator: PERSON_NAME_EN,
  publisher: PERSON_NAME_EN,

  category: "technology",

  alternates: {
    canonical: SITE_URL,
    languages: {
      "fa-IR": SITE_URL,
      "en-US": SITE_URL,
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,

    title: "Amir Hatami | Full-Stack JavaScript Developer",

    description:
      "Portfolio of Amir Hatami, a Full-Stack JavaScript Developer from Iran specializing in React, Next.js, Node.js, TypeScript, databases, and web application security.",

    locale: "en_US",
    alternateLocale: ["fa_IR"],

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Amir Hatami - Full-Stack JavaScript Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Amir Hatami | Full-Stack JavaScript Developer",

    description:
      "Full-Stack JavaScript Developer from Iran specializing in React, Next.js, Node.js, TypeScript, and web application security.",

    images: ["/opengraph-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  verification: {
    // بعداً اگر Google Search Console یا Bing Webmaster
    // verification code داشتی، اینجا اضافه کن.
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,

        name: PERSON_NAME_EN,

        alternateName: [
          PERSON_NAME_FA,
          "Amirreza Hatami",
          "Amir Reza Hatami",
          "Amir Hatami",
          "امیر حاتمی",
          "امیر رضا حاتمی",
          "امیررضا حاتمی",
        ],

        url: SITE_URL,

        image: `${SITE_URL}/me.jpg`,

        jobTitle: "Full-Stack JavaScript Developer",

        description:
          "Full-Stack JavaScript Developer from Iran specializing in React, Next.js, Node.js, TypeScript, databases, and web application security.",

        nationality: {
          "@type": "Country",
          name: "Iran",
        },

        address: {
          "@type": "PostalAddress",
          addressLocality: "Tehran",
          addressCountry: "IR",
        },

        knowsLanguage: [
          {
            "@type": "Language",
            name: "Persian",
          },
          {
            "@type": "Language",
            name: "English",
          },
        ],

        knowsAbout: [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "NestJS",
          "Tailwind CSS",
          "Redux",
          "Zustand",
          "TanStack Query",
          "React Hook Form",
          "MongoDB",
          "PostgreSQL",
          "Prisma",
          "Drizzle ORM",
          "REST API",
          "JWT",
          "OAuth",
          "Web Application Security",
          "OWASP Top 10",
          "Docker",
          "Git",
          "Linux",
          "React Native",
          "Electron",
          "Tauri",
        ],

        sameAs: [
          "https://github.com/AmirHatami20",
          "https://t.me/amir_hatami0",
          "https://www.linkedin.com/in/amir-hatami-39876a37/",
          "https://wa.me/989309242634",
        ],
      },

      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,

        url: SITE_URL,

        name: SITE_NAME,

        alternateName: [
          "Amir Hatami Portfolio",
          "پرتفولیو امیررضا حاتمی",
          "سایت امیررضا حاتمی",
        ],

        description:
          "Official portfolio website of Amir Hatami, a Full-Stack JavaScript Developer from Iran.",

        publisher: {
          "@id": `${SITE_URL}/#person`,
        },

        inLanguage: ["en-US", "fa-IR"],
      },

      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,

        url: SITE_URL,

        name: "Amir Hatami | Full-Stack JavaScript Developer in Iran",

        description:
          "Portfolio, projects, skills, experience, education, and contact information of Amir Hatami, a Full-Stack JavaScript Developer from Iran.",

        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },

        about: {
          "@id": `${SITE_URL}/#person`,
        },

        inLanguage: ["en-US", "fa-IR"],
      },
    ],
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="UTF-8" />

        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>

      <body className="antialiased">
        <Header />

        <StairTransition />

        <PageTransition>{children}</PageTransition>

        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}
