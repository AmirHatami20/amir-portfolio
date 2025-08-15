import "./globals.css";
import Header from "@/component/Header";
import PageTransition from "@/component/pageTransition/PageTransition";
import StairTransition from "@/component/pageTransition/StairTransition";
import localFont from "next/font/local";
import Script from "next/script";

const Dana = localFont({
    src: [
        {path: "/fonts/dana/Dana-Regular.woff2", weight: "400", style: "normal"},
        {path: "/fonts/dana/Dana-Medium.woff2", weight: "500", style: "normal"},
        {path: "/fonts/dana/Dana-DemiBold.woff2", weight: "600", style: "normal"},
        {path: "/fonts/dana/Dana-Bold.woff2", weight: "700", style: "normal"},
    ],
});

export const metadata = {
    title: "امیررضا حاتمی | توسعه‌دهنده وب",
    description:
        "پرتفولیوی امیررضا حاتمی - توسعه‌دهنده وب، برنامه‌نویس React و طراح رابط کاربری. مشاهده نمونه‌کارها و اطلاعات تماس.",
    icons: {icon: "/favicon.ico"},
    robots: {index: true, follow: true},
    openGraph: {
        title: "امیررضا حاتمی | توسعه‌دهنده وب",
        description:
            "پرتفولیوی امیررضا حاتمی - توسعه‌دهنده وب، برنامه‌نویس React و طراح رابط کاربری.",
        url: "https://amir-htm.ir",
        siteName: "سایت امیررضا حاتمی",
        images: [
            {
                url: "https://amir-htm.ir/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "امیررضا حاتمی",
            },
        ],
        locale: "fa_IR",
        type: "website",
    },
    alternates: {
        canonical: "https://amir-htm.ir",
    },
};

export default function RootLayout({children}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                name: "امیررضا حاتمی",
                alternateName: ["Amirreza Hatami", "Amir Reza Hatami", "Amir Hatami"],
                jobTitle: "توسعه‌دهنده وب",
                url: "https://amir-htm.ir",
                image: "https://amir-htm.ir/me.jpg",
                sameAs: [
                    "https://github.com/AmirHatami20",
                    "https://t.me/amir_hatami0",
                    "https://wa.me/989309242634",
                ],
                knowsAbout: ["React", "Next.js", "Node.js", "UI/UX Design"],
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Tehran",
                    addressCountry: "IR",
                },
            },
            {
                "@type": "WebSite",
                url: "https://amir-htm.ir",
                name: "سایت امیررضا حاتمی",
                potentialAction: {
                    "@type": "SearchAction",
                    target: "https://amir-htm.ir/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                },
            },
        ],
    };

    return (
        <html lang="fa" dir="rtl">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="language" content="fa"/>
            <meta name="author" content="امیررضا حاتمی"/>
            <link rel="sitemap" type="application/xml" href="/sitemap.xml"/>
            <title/>
        </head>
        <body className={`${Dana.className} antialiased`}>
        <Header/>
        <StairTransition/>
        <PageTransition>{children}</PageTransition>

        <Script
            id="ld-json"
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        </body>
        </html>
    );
}
