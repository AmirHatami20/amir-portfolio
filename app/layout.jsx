import "./globals.css";
import Header from "@/component/Header";
import PageTransition from "@/component/pageTransition/PageTransition";
import StairTransition from "@/component/pageTransition/StairTransition";
import localFont from "next/font/local";

const Dana = localFont({
    src: [
        { path: "/fonts/dana/Dana-Regular.woff2", weight: "400", style: "normal" },
        { path: "/fonts/dana/Dana-Medium.woff2", weight: "500", style: "normal" },
        { path: "/fonts/dana/Dana-DemiBold.woff2", weight: "600", style: "normal" },
        { path: "/fonts/dana/Dana-Bold.woff2", weight: "700", style: "normal" },
    ],
});

export const metadata = {
    title: "امیر رضا حاتمی | توسعه‌دهنده وب و طراح رابط کاربری",
    description: "پرتفولیوی امیر رضا حاتمی - توسعه‌دهنده وب، برنامه‌نویس React و طراح رابط کاربری. مشاهده نمونه‌کارها و اطلاعات تماس.",
    icons: {
        icon: "/logo.svg",
    },
    openGraph: {
        title: "امیر رضا حاتمی | توسعه‌دهنده وب",
        description: "پرتفولیوی امیر رضا حاتمی - توسعه‌دهنده وب، برنامه‌نویس React و طراح رابط کاربری.",
        url: "https://amir-htm.ir",
        siteName: "Amir Reza Hatami Portfolio",
        images: [
            {
                url: "/images/photo.png",
                width: 1200,
                height: 630,
                alt: "Amir Reza Hatami Portfolio Preview",
            },
        ],
        locale: "fa_IR",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
        <head>
            {/* Structured Data Schema.org */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "امیر رضا حاتمی",
                        "jobTitle": "توسعه‌دهنده وب",
                        "url": "https://amir-htm.ir",
                        "sameAs": [
                            "https://github.com/AmirHatami20",
                            "https://t.me/amir_hatami0",
                            "https://wa.me/989309242634"
                        ]
                    }),
                }}
            />
        </head>
        <body className={`${Dana.className} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        </body>
        </html>
    );
}
