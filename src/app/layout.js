import localFont from "next/font/local";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Providers } from "./components/providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Raina Sinha",
  description: "Meet Raina Sinha, a 20-year-old influencer, dancer, and zoology student from Varanasi. Explore her talents, brand promotions, and more on this website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
