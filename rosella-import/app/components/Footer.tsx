import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  PackageSearch,
  Ship,
  Plane,
  Truck,
  ArrowRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import logo from "../assets/logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Track Goods", href: "/tracking" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "China to Ghana Import",
  "Sea Freight",
  "Air Freight",
  "Pre-Order Cargo Tracking",
  "Delivery Updates",
  "Cargo Support",
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#1f1f1f] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#f5c400]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#f5c400]/10 blur-3xl" />

      {/* Top CTA section */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.4fr_0.8fr] lg:px-8">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#f5c400]/30 bg-[#f5c400]/10 px-4 py-2 text-sm font-semibold text-[#f5c400]">
              <PackageSearch size={17} />
              Track your imported goods with ease
            </div>

            <h2 className="max-w-2xl text-2xl font-black tracking-tight text-white sm:text-3xl">
              Stay updated from China to Ghana until your goods arrive safely.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              Rosella’s Import and Cargo Solutions helps clients monitor
              pre-ordered goods, receive shipment updates, and stay informed
              throughout the import process.
            </p>
          </div>

          <div className="flex items-center lg:justify-end">
            <Link
              href="/tracking"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#f5c400] px-6 py-4 text-sm font-extrabold text-[#1c1c1c] shadow-[0_18px_45px_rgba(245,196,0,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffd21f]"
            >
              Track Shipment
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr] lg:px-8">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f5c400]/40 bg-black/40 shadow-[0_0_25px_rgba(245,196,0,0.16)]">
              <Image
                src={logo}
                alt="Rosella’s Import and Cargo Solutions Logo"
                className="h-10 w-10 object-contain"
              />
            </div>

            <div>
              <h3 className="text-xl font-black leading-none text-white">
                Rosella’s
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5c400]">
                Import & Cargo Solutions
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-300">
            Reliable import and cargo support for customers who buy goods from
            China based on pre-order. We help you stay informed with clear
            tracking updates and customer support.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-[#f5c400]/40 hover:bg-[#f5c400] hover:text-[#1c1c1c]"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-[#f5c400]/40 hover:bg-[#f5c400] hover:text-[#1c1c1c]"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://wa.me/233556963283"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-[#f5c400]/40 hover:bg-[#f5c400] hover:text-[#1c1c1c]"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-5 text-sm font-extrabold uppercase tracking-[0.2em] text-[#f5c400]">
            Quick Links
          </h4>

          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-[#f5c400]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f5c400] opacity-60 transition group-hover:opacity-100" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-5 text-sm font-extrabold uppercase tracking-[0.2em] text-[#f5c400]">
            Our Services
          </h4>

          <ul className="space-y-3">
            {services.map((service) => (
              <li
                key={service}
                className="flex items-center gap-2 text-sm font-medium text-zinc-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#f5c400] opacity-60" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-5 text-sm font-extrabold uppercase tracking-[0.2em] text-[#f5c400]">
            Contact Info
          </h4>

          <div className="space-y-4 text-sm text-zinc-300">
            <a
              href="tel:0556963283"
              className="flex gap-3 transition hover:text-[#f5c400]"
            >
              <Phone size={18} className="mt-0.5 shrink-0 text-[#f5c400]" />
              <span>0556963283</span>
            </a>

            <a
              href="mailto:rosellasimports@gmail.com"
              className="flex gap-3 transition hover:text-[#f5c400]"
            >
              <Mail size={18} className="mt-0.5 shrink-0 text-[#f5c400]" />
              <span>rosellasimports@gmail.com</span>
            </a>

            <div className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#f5c400]" />
              <span>Office: UCC Kwesi Prah</span>
            </div>

            <div className="flex gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-[#f5c400]" />
              <span>Mon – Friday, 8:00am to 5:00pm</span>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#f5c400]/20 bg-[#f5c400]/10 p-4">
            <p className="text-sm font-bold text-[#f5c400]">
              Import routes supported
            </p>

            <div className="mt-3 grid gap-2 text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <Ship size={16} className="text-[#f5c400]" />
                <span>Sea Freight</span>
              </div>

              <div className="flex items-center gap-2">
                <Plane size={16} className="text-[#f5c400]" />
                <span>Air Freight</span>
              </div>

              <div className="flex items-center gap-2">
                <Truck size={16} className="text-[#f5c400]" />
                <span>Local Delivery Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-zinc-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {currentYear} Rosella’s Import and Cargo Solutions. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-[#f5c400]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#f5c400]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;