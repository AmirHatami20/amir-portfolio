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
    title: "امیررضا حاتمی | توسعه‌دهنده وب و طراح رابط کاربری",
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
                url: "https://amir-htm.ir/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "امیررضا حاتمی",
            },
        ],
        locale: "fa_IR",
        type: "website",
    },
};

export default function RootLayout({children}) {
    const personJsonLd = {
        "@context": "https://schema.org",
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
    };

    return (
        <html lang="fa" dir="rtl">
        <body className={`${Dana.className} antialiased`}>
        <Header/>
        <StairTransition/>
        <PageTransition>{children}</PageTransition>
        <Script
            id="ld-person"
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(personJsonLd)}}
        />
        </body>
        </html>
    );
}
