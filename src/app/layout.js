import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="hidden">
          <h1>Raina Sinha - Influencer, Dancer, and Zoology Student</h1>
          <h2>Showcasing My Talents and Passions</h2>
        Welcome to my official website! I&apos;m Raina Sinha, a 20-year-old influencer, dancer, and student pursuing BSc Zoology from Uday Pratap College, Varanasi.
As a passionate dancer and performer, I love creating engaging content, including brand promotions, lip-sync videos, and dance performances.
This website is a platform for me to showcase my talents, share my experiences, and connect with my audience. I&apos;m excited to share my journey with you and look forward to collaborating with brands and like-minded individuals.
Feel free to explore my website, watch my videos, and follow me on social media to stay updated on my latest projects and adventures!
This content highlights Raina&apos;s personality, talents, and passions while also emphasizing her influencer and branding work
        </div>

       <Nav/>
        {children}
      <Footer/>
      </body>

    </html>
  );
}
