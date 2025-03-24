"use client";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <>
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
    </>
  );
}
