import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "I Move It Transport | Expedited Cargo Van Freight Houston TX",
  description:
    "Houston-based expedited cargo van transportation providing interstate freight delivery across the United States. Reliable sprinter and cargo van transport.",
  keywords: [
    "expedited freight Houston",
    "cargo van transport Houston",
    "sprinter van freight",
    "expedited cargo van service",
    "hotshot cargo van delivery",
    "interstate cargo van freight"
  ],
  verification: {
    google: "ygpFHyfBkzl80IOZ4xW9kmF4tfn6hok0UBTTMMqVkNY"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
