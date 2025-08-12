import "./globals.css";
import Header from "@/component/Header";
import PageTransition from "@/component/pageTransition/PageTransition";
import StairTransition from "@/component/pageTransition/StairTransition";
import localFont from "next/font/local"
const Dana = localFont({
    src: [
        {path: "/fonts/dana/Dana-Regular.woff2", weight: "400", style: "normal"},
        {path: "/fonts/dana/Dana-Medium.woff2", weight: "500", style: "normal"},
        {path: "/fonts/dana/Dana-DemiBold.woff2", weight: "600", style: "normal"},
        {path: "/fonts/dana/Dana-Bold.woff2", weight: "700", style: "normal"},
    ],
});

export const metadata = {
    title: "Amir Hatami",
    description: "Portfolio site",
    icons: {
        icon: "/logo.svg",
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${Dana.className} antialiased`}>
        <Header/>
        <StairTransition/>
        <PageTransition>
            {children}
        </PageTransition>
        </body>
        </html>
    );
}
