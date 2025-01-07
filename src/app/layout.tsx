import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Chronicles: Empowering Web Development & AI Enthusiasts",
  description:
    "Welcome to Code Chronicles! Discover expert insights and innovative solutions in web development, AI, and beyond. From front-end design to back-end strategies, we bring you tutorials, tips, and deep dives into the latest technologies shaping the digital world. Perfect for developers, designers, and tech enthusiasts looking to stay ahead in their journey. Explore, learn, and grow with us!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
className={`${montserrat.className} bg-gradient-to-r from-[#adb6c7ee] to-[#c3d4db] dark:from-[#182227] dark:to-[#141424]`} 

      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem = {false}
          disableTransitionOnChange
        >
          <Container>
          <Navbar />
          {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
