import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import HeaderPage from "../shared/header/page";
import Footer from "../shared/footer/page";

const geistSans = localFont({

   src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "sports-square",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${geistSans.variable} ${geistMono.variable} antialiased `}
  
      >
      
        <HeaderPage/>
        <main className="w-full h-screen">
          
        {children}
        </main>
        <Footer />
       
      </body>
    </html>
  );
}
