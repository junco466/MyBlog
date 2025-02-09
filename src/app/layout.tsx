import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import { ThemeProviderShadcn } from "@/providers/theme-provider-shadcn";
import { ThemeContextProviderManual } from "@/context/ThemeContextManual";
import ThemeProviderManual from '../providers/theme-provider-manual'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My blog",
  description: "My personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* <ThemeProviderShadcn
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
          <ThemeContextProviderManual>
            <ThemeProviderManual>
            <div className="main-container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
            </ThemeProviderManual>
          </ThemeContextProviderManual>
          {/* </ThemeProviderShadcn> */}
        </body>
      </html>
    </>
  );
}
