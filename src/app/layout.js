import { Geist, Geist_Mono, Tiny5 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixel = Tiny5({
  variable: "--font-tiny5",
  subsets: ["latin"],
  weight: "400" // or other supported subsets
});

export const metadata = {
  title: "Status Code 2",
  icons: {
    icon: "/image 26.svg",
    shortcut: "/image 26.svg",

  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${pixel.variable} antialiased overflow-x-hidden max-w-[100vw]`}>
        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
