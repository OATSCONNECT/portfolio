"use client"; // Required to use React state or event handlers in the App Router

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  // React state for the mobile menu
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      {/* If you still want meta tags specifically for this page, you can do so here:
         *
         * <Head>
         *   <title>Homepage | Atom Template</title>
         *   <meta name="description" content="Lorem ipsum..." />
         * </Head>
         *
         * But most of that is now in layout.tsx metadata or <Head>.
         */}

      <main className={mobileMenu ? "overflow-hidden max-h-screen relative" : "relative"}>
        <div id="main" className="relative">
          {/* NAVBAR */}
          <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
            <div className="container flex items-center justify-between">
              <div>
                <Link href="/">
                  {/* Example dimensions for the logo: width=192, height=48 */}
                  <Image
                    src="/images/logo.svg"
                    alt="logo image"
                    width={192}
                    height={48}
                    priority
                  />
                </Link>
              </div>
              <div className="hidden lg:block">
                <ul className="flex items-center">
                  <li className="group pl-6">
                    <Link
                      href="#about"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      About
                    </Link>
                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>
                  <li className="group pl-6">
                    <Link
                      href="#services"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Services
                    </Link>
                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>
                  <li className="group pl-6">
                    <Link
                      href="#portfolio"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Portfolio
                    </Link>
                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>
                  <li className="group pl-6">
                    <Link
                      href="#clients"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Clients
                    </Link>
                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>
                  <li className="group pl-6">
                    <Link
                      href="#work"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Work
                    </Link>
                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>
                  <li className="group pl-6">
                    <Link
                      href="#statistics"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Statistics
                    </Link>
                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>
                  <li className="group pl-6">
                    <Link
                      href="#blog"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Blog
                    </Link>
                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>
                  <li className="group pl-6">
                    <Link
                      href="#contact"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Contact
                    </Link>
                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>
                </ul>
              </div>
              <div className="block lg:hidden">
                <button onClick={() => setMobileMenu(true)}>
                  <i className="bx bx-menu text-4xl text-white"></i>
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE MENU OVERLAY */}
          {mobileMenu && (
            <div className="fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 lg:hidden">
              <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
                <button
                  className="absolute top-0 right-0 mt-4 mr-4"
                  onClick={() => setMobileMenu(false)}
                >
                  <Image
                    src="/images/icon-close.svg"
                    alt="close menu"
                    width={40}
                    height={40}
                  />
                </button>
                <ul className="mt-8 flex flex-col">
                  <li className="py-2">
                    <Link
                      href="#about"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                      onClick={() => setMobileMenu(false)}
                    >
                      About
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="#services"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                      onClick={() => setMobileMenu(false)}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="#portfolio"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                      onClick={() => setMobileMenu(false)}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="#clients"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                      onClick={() => setMobileMenu(false)}
                    >
                      Clients
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="#work"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                      onClick={() => setMobileMenu(false)}
                    >
                      Work
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="#statistics"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                      onClick={() => setMobileMenu(false)}
                    >
                      Statistics
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="#blog"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                      onClick={() => setMobileMenu(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="#contact"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                      onClick={() => setMobileMenu(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}

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
                    Hello I&apos;m Christy Smith!
                  </h1>
                  <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                    <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                      <p className="font-body text-lg uppercase text-white">Let&apos;s connect</p>
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

          {/* ABOUT SECTION */}
          <div className="bg-grey-50" id="about">
            <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
              <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                  Who am I?
                </h2>
                <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                  I&apos;m Christy Smith, a Web Designer &amp; Photographer
                </h4>
                <p className="pt-6 font-body leading-relaxed text-grey-20">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam...
                </p>
                <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                  <div className="flex items-center justify-center sm:justify-start">
                    <p className="font-body text-lg font-semibold uppercase text-grey-20">
                      Connect with me
                    </p>
                    <div className="hidden sm:block">
                      <i className="bx bx-chevron-right text-2xl text-primary"></i>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                    <Link href="/">
                      <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                    </Link>
                    <Link href="/" className="pl-4">
                      <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                    </Link>
                    <Link href="/" className="pl-4">
                      <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                    </Link>
                    <Link href="/" className="pl-4">
                      <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                    </Link>
                    <Link href="/" className="pl-4">
                      <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                {/* Skills bars */}
                <div>
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">HTML &amp; CSS</h4>
                    <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <div className="h-3 rounded-full bg-primary" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">Python</h4>
                    <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <div className="h-3 rounded-full bg-primary" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">Javascript</h4>
                    <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <div className="h-3 rounded-full bg-primary" style={{ width: "98%" }}></div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">Figma</h4>
                    <h3 className="font-body text-3xl font-bold text-primary">91%</h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <div className="h-3 rounded-full bg-primary" style={{ width: "91%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICES SECTION */}
          <div className="container py-16 md:py-20" id="services">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Here&apos;s what I&apos;m good at
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              These are the services I offer
            </h3>

            <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
              {/* Service 1 */}
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="block group-hover:hidden">
                    <Image
                      src="/images/icon-development-black.svg"
                      alt="development icon"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="hidden group-hover:block">
                    <Image
                      src="/images/icon-development-white.svg"
                      alt="development icon"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    WEB DEVELOPMENT
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              {/* Service 2 */}
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="block group-hover:hidden">
                    <Image
                      src="/images/icon-content-black.svg"
                      alt="content marketing icon"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="hidden group-hover:block">
                    <Image
                      src="/images/icon-content-white.svg"
                      alt="content marketing icon"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Technical Writing
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              {/* Service 3 */}
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="block group-hover:hidden">
                    <Image
                      src="/images/icon-mobile-black.svg"
                      alt="Mobile dev icon"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="hidden group-hover:block">
                    <Image
                      src="/images/icon-mobile-white.svg"
                      alt="Mobile dev icon"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Mobile Development
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              {/* Service 4 */}
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="block group-hover:hidden">
                    <Image
                      src="/images/icon-email-black.svg"
                      alt="Email Marketing icon"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="hidden group-hover:block">
                    <Image
                      src="/images/icon-email-white.svg"
                      alt="Email Marketing icon"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Email Development
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              {/* Service 5 */}
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="block group-hover:hidden">
                    <Image
                      src="/images/icon-design-black.svg"
                      alt="Theme Design icon"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="hidden group-hover:block">
                    <Image
                      src="/images/icon-design-white.svg"
                      alt="Theme Design icon"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Graphic Design
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              {/* Service 6 */}
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="block group-hover:hidden">
                    <Image
                      src="/images/icon-graphics-black.svg"
                      alt="Graphic Design icon"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="hidden group-hover:block">
                    <Image
                      src="/images/icon-graphics-white.svg"
                      alt="Graphic Design icon"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Web Design
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PORTFOLIO SECTION */}
          <div className="container py-16 md:py-20" id="portfolio">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Check out my Portfolio
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Here&apos;s what I have done in the past
            </h3>
            <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
              <Link
                href="/"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <Image
                  src="/images/portfolio-apple.jpeg"
                  alt="portfolio"
                  width={800}
                  height={600}
                  className="w-full shadow"
                />
              </Link>
              <Link
                href="/"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <Image
                  src="/images/portfolio-stripe.jpeg"
                  alt="portfolio"
                  width={800}
                  height={600}
                  className="w-full shadow"
                />
              </Link>
              <Link
                href="/"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <Image
                  src="/images/portfolio-fedex.jpeg"
                  alt="portfolio"
                  width={800}
                  height={600}
                  className="w-full shadow"
                />
              </Link>
              <Link
                href="/"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <Image
                  src="/images/portfolio-microsoft.jpeg"
                  alt="portfolio"
                  width={800}
                  height={600}
                  className="w-full shadow"
                />
              </Link>
            </div>
          </div>

          {/* CLIENTS SECTION */}
          <div className="bg-grey-50" id="clients">
            <div className="container py-16 md:py-20">
              <div className="mx-auto w-full sm:w-3/4 lg:w-full">
                <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                  My latest clients
                </h2>
                <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
                  <span className="m-8 block">
                    <Image
                      src="/images/logo-coca-cola.svg"
                      alt="client logo"
                      width={150}
                      height={50}
                      className="mx-auto block h-12 w-auto"
                    />
                  </span>
                  <span className="m-8 block">
                    <Image
                      src="/images/logo-apple.svg"
                      alt="client logo"
                      width={150}
                      height={50}
                      className="mx-auto block h-12 w-auto"
                    />
                  </span>
                  <span className="m-8 block">
                    <Image
                      src="/images/logo-netflix.svg"
                      alt="client logo"
                      width={150}
                      height={50}
                      className="mx-auto block h-12 w-auto"
                    />
                  </span>
                  <span className="m-8 block">
                    <Image
                      src="/images/logo-amazon.svg"
                      alt="client logo"
                      width={150}
                      height={50}
                      className="mx-auto block h-12 w-auto"
                    />
                  </span>
                  <span className="m-8 block">
                    <Image
                      src="/images/logo-stripe.svg"
                      alt="client logo"
                      width={150}
                      height={50}
                      className="mx-auto block h-12 w-auto"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* WORK EXPERIENCE SECTION */}
          <div className="container py-16 md:py-20" id="work">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              My work experience
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Here&apos;s what I did before freelancing
            </h3>

            <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
              {/* Job 1 */}
              <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <Image
                        src="/images/logo-spotify.svg"
                        alt="spotify"
                        width={128}
                        height={40}
                        className="h-auto w-32"
                      />
                    </span>
                    <div className="relative ml-3 hidden w-full md:block">
                      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>
                    <div className="mt-1 flex">
                      <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-body font-bold text-grey-40">
                          Apr 2015 - Mar 2018
                        </span>
                        <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                          Frontend Developer
                        </span>
                        <div className="pt-2">
                          <span className="block font-body text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                            venenatis enim.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Job 2 */}
              <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <Image
                        src="/images/logo-microsoft.svg"
                        alt="microsoft"
                        width={128}
                        height={40}
                        className="h-auto w-32"
                      />
                    </span>
                    <div className="relative ml-3 hidden w-full md:block">
                      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>
                    <div className="mt-1 flex">
                      <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-body font-bold text-grey-40">
                          Mar 2018 - September 2019
                        </span>
                        <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                          Software Engineer
                        </span>
                        <div className="pt-2">
                          <span className="block font-body text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                            venenatis enim.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Job 3 */}
              <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <Image
                        src="/images/logo-fedex.svg"
                        alt="fedex"
                        width={128}
                        height={40}
                        className="h-auto w-32"
                      />
                    </span>
                    <div className="relative ml-3 hidden w-full md:block">
                      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>
                    <div className="mt-1 flex">
                      <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-body font-bold text-grey-40">
                          October 2019 - Feb 2021
                        </span>
                        <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                          DevOps Engineer
                        </span>
                        <div className="pt-2">
                          <span className="block font-body text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                            venenatis enim.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STATISTICS SECTION */}
          <div
            className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
            style={{ backgroundImage: "url('/images/experience-figure.png')" }}
            id="statistics"
          >
            <div className="container">
              <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
                <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                  {/* 1 */}
                  <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                    <div>
                      <Image
                        src="/images/icon-project.svg"
                        alt="icon project"
                        width={80}
                        height={80}
                        className="mx-auto md:h-20"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">12</h1>
                      <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                        Finished Projects
                      </h4>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                    <div>
                      <Image
                        src="/images/icon-award.svg"
                        alt="icon award"
                        width={80}
                        height={80}
                        className="mx-auto md:h-20"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">3</h1>
                      <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                        Awards Won
                      </h4>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                    <div>
                      <Image
                        src="/images/icon-happy.svg"
                        alt="icon happy clients"
                        width={80}
                        height={80}
                        className="mx-auto md:h-20"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">8</h1>
                      <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                        Happy Clients
                      </h4>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                    <div>
                      <Image
                        src="/images/icon-puzzle.svg"
                        alt="icon puzzle"
                        width={80}
                        height={80}
                        className="mx-auto md:h-20"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">99</h1>
                      <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                        Bugs Fixed
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BLOG SECTION */}
          <div className="bg-grey-50" id="blog">
            <div className="container py-16 md:py-20">
              <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                I also like to write
              </h2>
              <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Check out my latest posts!
              </h4>
              <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                {/* Post 1 */}
                <Link href="/post" className="shadow">
                  <div
                    style={{ backgroundImage: "url('/images/post-01.png')" }}
                    className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                  >
                    <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                    <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                      Read More
                    </span>
                  </div>
                  <div className="bg-white py-6 px-5 xl:py-8">
                    <span className="block font-body text-lg font-semibold text-black">
                      How to become a frontend developer
                    </span>
                    <span className="block pt-2 font-body text-grey-20">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                  </div>
                </Link>
                {/* Post 2 */}
                <Link href="/post" className="shadow">
                  <div
                    style={{ backgroundImage: "url('/images/post-02.png')" }}
                    className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                  >
                    <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                    <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                      Read More
                    </span>
                  </div>
                  <div className="bg-white py-6 px-5 xl:py-8">
                    <span className="block font-body text-lg font-semibold text-black">
                      My personal productivity system
                    </span>
                    <span className="block pt-2 font-body text-grey-20">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                  </div>
                </Link>
                {/* Post 3 */}
                <Link href="/post" className="shadow">
                  <div
                    style={{ backgroundImage: "url('/images/post-03.png')" }}
                    className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                  >
                    <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                    <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                      Read More
                    </span>
                  </div>
                  <div className="bg-white py-6 px-5 xl:py-8">
                    <span className="block font-body text-lg font-semibold text-black">
                      My year in review 2020
                    </span>
                    <span className="block pt-2 font-body text-grey-20">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* CONTACT SECTION */}
          <div className="container py-16 md:py-20" id="contact">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Here&apos;s a contact form
            </h2>
            <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Have Any Questions?
            </h4>
            <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
              <p className="font-body text-grey-10">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                condimentum turpis nisl sem...
              </p>
            </div>
            <form className="mx-auto w-full pt-10 sm:w-3/4">
              <div className="flex flex-col md:flex-row">
                <input
                  className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
                <input
                  className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                  placeholder="Email"
                  type="text"
                  id="email"
                />
              </div>
              <textarea
                className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
                placeholder="Message"
                id="message"
                cols={30}
                rows={10}
              ></textarea>
              <button
                className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
              >
                Send
                <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
              </button>
            </form>
            <div className="flex flex-col pt-16 lg:flex-row">
              <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
                <div className="flex items-center">
                  <i className="bx bx-phone text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Phone
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  (+881) 111 222 333
                </p>
              </div>
              <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                <div className="flex items-center">
                  <i className="bx bx-envelope text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Email
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  name@mydomain.com
                </p>
              </div>
              <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                <div className="flex items-center">
                  <i className="bx bx-map text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Address
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  123 New York D Block 1100, 2011 USA
                </p>
              </div>
            </div>
          </div>

          {/* MAP SECTION */}
          <div
            className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
            style={{ backgroundImage: "url('/images/map.png')" }}
          ></div>

          {/* CTA SECTION */}
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
                © Copyright 2022. All rights reserved, ATOM.
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
        </div>
      </main>
    </>
  )
}
