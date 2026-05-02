"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  MapPin,
  PackageSearch,
  Ship,
  Plane,
  Truck,
} from "lucide-react";

import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Track Goods", href: "/tracking" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

const announcementItems = [
  {
    icon: Ship,
    text: "China to Ghana import solutions",
  },
  {
    icon: Plane,
    text: "Sea & air cargo tracking for pre-ordered goods",
  },
  {
    icon: Truck,
    text: "Delivery updates across Ghana",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Moving Top Announcement Bar */}
      <div className="overflow-hidden border-b border-black/10 bg-[#f5c400] text-[#202020]">
        <div className="marquee">
          <div className="marquee-track">
            {[...announcementItems, ...announcementItems].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex shrink-0 items-center gap-2 px-8 py-2 text-sm font-semibold whitespace-nowrap"
                >
                  <Icon size={16} />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="border-b border-white/10 bg-[#222222]/95 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[88px] items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f5c400]/40 bg-black/40 shadow-[0_0_25px_rgba(245,196,0,0.18)]">
                <Image
                  src={logo}
                  alt="Rosella’s Import and Cargo Solutions Logo"
                  className="h-10 w-10 object-contain"
                  priority
                />
              </div>

              <div className="leading-tight">
                <h1 className="text-lg font-black tracking-tight text-white sm:text-xl">
                  Rosella’s
                </h1>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f5c400] sm:text-[13px]">
                  Import & Cargo Solutions
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative group text-sm font-semibold transition duration-300 ${
                      isActive
                        ? "text-[#f5c400]"
                        : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#f5c400] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop actions */}
            <div className="hidden items-center gap-3 lg:flex">
              <div className="text-right">
                <p className="text-xs text-zinc-400">Call for enquiries</p>
                <a
                  href="tel:0556963283"
                  className="text-sm font-bold text-white hover:text-[#f5c400]"
                >
                  0556963283
                </a>
              </div>

              <Link
                href="/tracking"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#f5c400] px-5 py-3 text-sm font-extrabold text-[#1c1c1c] shadow-[0_14px_35px_rgba(245,196,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffd21f] hover:shadow-[0_18px_45px_rgba(245,196,0,0.32)]"
              >
                <PackageSearch size={19} />
                Track Shipment
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-white/10 bg-[#222222] transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[620px]" : "max-h-0"
          }`}
        >
          <div className="space-y-2 px-4 py-5 sm:px-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#f5c400] text-[#1c1c1c]"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/tracking"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-[#f5c400] px-5 py-3 font-extrabold text-[#1c1c1c]"
            >
              <PackageSearch size={19} />
              Track Shipment
            </Link>

            <div className="mt-5 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#f5c400]" />
                <span>0556963283</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#f5c400]" />
                <span>rosellasimports@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={16} className="text-[#f5c400]" />
                <span>Mon – Friday, 8:00am to 5:00pm</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#f5c400]" />
                <span>Office: UCC Kwesi Prah</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;