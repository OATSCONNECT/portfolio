// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar"; // Import Navbar

export const metadata = {
  title: "Atom Template",
  description: "Sample Next.js 13 site with lint fixes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Move your custom font link here so it loads for all pages */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* If you use boxicons or other external CSS, you can link them here too */}
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Navbar /> {/* Navbar will be visible on all pages */}
        {children}
      </body>
    </html>
  );
}
