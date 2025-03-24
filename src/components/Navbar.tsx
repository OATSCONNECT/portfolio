"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
        <div className="container flex items-center justify-between">
          <div>
            <Link href="/">
              {/* Example dimensions for the logo: width=192, height=48 */}
              <Image
                src="public/images/logo.svg"
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
                  href="/services"
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
    </>
  );
}
