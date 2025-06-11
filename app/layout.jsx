import "./globals.css";
import Header from "@/component/Header";
import PageTransition from "@/component/pageTransition/PageTransition";
import StairTransition from "@/component/pageTransition/StairTransition";

export const metadata = {
    title: "AmirHatami",
    description: "My Next.js app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className="font-dana-medium antialiased pb-6">
        <Header/>
        <StairTransition/>
        <PageTransition>
            {children}
        </PageTransition>
        </body>
        </html>
    );
}
