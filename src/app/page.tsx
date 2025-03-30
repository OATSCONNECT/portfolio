"use client";

import Navbar from "../components/navbar"; // <-- Adjusted path
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* If you still want meta tags specifically for this page, do so here:
         *
         * <Head>
         *   <title>Homepage | Atom Template</title>
         *   <meta name="description" content="Lorem ipsum..." />
         * </Head>
         */}

      <main>
        {/* NAVBAR from separate file */}
        <Navbar />

        {/* HERO SECTION */}
        <div
          className="relative bg-cover bg-center bg-no-repeat py-8"
          style={{ backgroundImage: "url('/images/bg-hero.jpg')" }}
        >
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>
          <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <div className="rounded-full border-8 border-primary shadow-xl">
                {/* Example dimension guess: width=192, height=192 for a circular image */}
                <Image
                  src="/images/blog-author.jpg"
                  alt="author"
                  width={192}
                  height={192}
                  className="rounded-full"
                />
              </div>
              <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                  Hello I&apos;m Oluwatunbi Abe!
                </h1>
                <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                  <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                    <p className="font-body text-lg uppercase text-white">
                      Let&apos;s connect
                    </p>
                    <div className="hidden sm:block">
                      <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                    <Link href="/">
                      <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link href="/" className="pl-4">
                      <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link href="/" className="pl-4">
                      <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link href="/" className="pl-4">
                      <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link href="/" className="pl-4">
                      <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAP SECTION (Optional) */}
        <div
          className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
          style={{ backgroundImage: "url('/images/map.png')" }}
        ></div>

        {/* CTA SECTION (Optional) */}
        <div
          className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
          style={{ backgroundImage: "url('/images/bg-cta.jpg')" }}
        >
          <div className="container relative z-30">
            <h3 className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
              Keep <span className="font-bold">up-to-date</span> <br />
              with what I&apos;m up to
            </h3>
            <form className="mt-6 flex flex-col justify-center sm:flex-row">
              <input
                className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3"
                type="text"
                id="email"
                placeholder="Give me your Email"
              />
              <button
                className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg"
              >
                Join the club
              </button>
            </form>
          </div>
        </div>

        {/* FOOTER */}
        <div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              © Copyright 2025 . All rights reserved, OATSConnect.
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              <Link href="/">
                <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
