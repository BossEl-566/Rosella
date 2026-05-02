import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Globe2,
  Mail,
  MapPin,
  PackageSearch,
  Plane,
  Phone,
  ShieldCheck,
  Ship,
  Sparkles,
  Truck,
  Warehouse,
} from "lucide-react";
import heroImage from "./assets/hero2.png";

const stats = [
  {
    value: "China → Ghana",
    label: "Import Route",
  },
  {
    value: "Air & Sea",
    label: "Cargo Options",
  },
  {
    value: "Real-time",
    label: "Shipment Updates",
  },
  {
    value: "Mon–Fri",
    label: "Customer Support",
  },
];

const services = [
  {
    icon: Ship,
    title: "Sea Freight",
    description:
      "Affordable shipping option for larger goods, bulk orders, and non-urgent cargo from China to Ghana.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "Fast import option for urgent goods, smaller packages, and time-sensitive customer pre-orders.",
  },
  {
    icon: PackageSearch,
    title: "Shipment Tracking",
    description:
      "Customers can check where their goods have reached using a tracking ID or order number.",
  },
  {
    icon: Truck,
    title: "Local Delivery Updates",
    description:
      "Receive updates when goods arrive in Ghana and move toward pickup or final delivery.",
  },
];

const steps = [
  {
    number: "01",
    title: "Client places pre-order",
    description:
      "Customers submit the goods they want imported from China through Rosella’s support process.",
  },
  {
    number: "02",
    title: "Goods are purchased and shipped",
    description:
      "The cargo is prepared, shipped by air or sea, and assigned a tracking reference.",
  },
  {
    number: "03",
    title: "Shipment status is updated",
    description:
      "Customers check the website to see the current stage of their goods.",
  },
  {
    number: "04",
    title: "Goods arrive in Ghana",
    description:
      "Clients are notified when items are ready for pickup or local delivery.",
  },
];

const trackingStages = [
  "Order received",
  "Purchased from China",
  "Departed warehouse",
  "In transit",
  "Arrived in Ghana",
  "Ready for pickup",
];

function Page() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#1f1f1f]">
      {/* Hero Section */}
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage.src})`,
        }}
      >
        {/* Main black overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Black shade instead of yellow gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.9),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.82),transparent_48%)]" />

        {/* Modern grid overlay */}
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f5c400]/30 bg-black/30 px-4 py-2 text-sm font-bold text-[#f5c400] backdrop-blur-md">
              <Sparkles size={17} />
              Trusted import and cargo tracking support
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Track your goods from{" "}
              <span className="text-[#f5c400]">China to Ghana</span> with confidence.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              Rosella’s Import and Cargo Solutions helps customers monitor
              pre-ordered goods, receive cargo updates, and know exactly when
              shipments are getting closer to arrival.
            </p>

            {/* Tracking Form */}
            <form
              action="/tracking"
              method="GET"
              className="mt-8 max-w-2xl rounded-3xl border border-white/10 bg-black/35 p-3 shadow-2xl backdrop-blur-xl"
            >
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4">
                  <PackageSearch className="shrink-0 text-[#f5c400]" />
                  <input
                    type="text"
                    name="trackingId"
                    placeholder="Enter tracking ID or order number"
                    className="w-full bg-transparent text-sm font-semibold text-[#1f1f1f] outline-none placeholder:text-zinc-400"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f5c400] px-6 py-4 text-sm font-extrabold text-[#1c1c1c] transition hover:-translate-y-0.5 hover:bg-[#ffd21f]"
                >
                  Track Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f5c400]" />
                Air cargo
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f5c400]" />
                Sea freight
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f5c400]" />
                Ghana delivery updates
              </span>
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-black/40 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-black/35 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-[#f5c400] p-5 text-[#1f1f1f]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold opacity-80">Current Shipment</p>
                    <h3 className="mt-1 text-2xl font-black">RS-CHN-GH-2048</h3>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f1f1f] text-[#f5c400]">
                    <PackageSearch size={28} />
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-[#1f1f1f] p-4 text-white">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-bold text-zinc-300">
                      Shipment Progress
                    </p>

                    <p className="rounded-full bg-[#f5c400]/20 px-3 py-1 text-xs font-bold text-[#f5c400]">
                      In Transit
                    </p>
                  </div>

                  <div className="space-y-4">
                    {trackingStages.map((stage, index) => {
                      const completed = index <= 3;

                      return (
                        <div key={stage} className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                              completed
                                ? "bg-[#f5c400] text-[#1f1f1f]"
                                : "bg-white/10 text-zinc-500"
                            }`}
                          >
                            {completed ? (
                              <CheckCircle2 size={17} />
                            ) : (
                              <span className="h-2 w-2 rounded-full bg-current" />
                            )}
                          </div>

                          <span
                            className={`text-sm font-semibold ${
                              completed ? "text-white" : "text-zinc-500"
                            }`}
                          >
                            {stage}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <Ship className="mb-3 text-[#f5c400]" />
                  <p className="text-xs font-semibold text-zinc-300">Sea Freight</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <Plane className="mb-3 text-[#f5c400]" />
                  <p className="text-xs font-semibold text-zinc-300">Air Freight</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <Truck className="mb-3 text-[#f5c400]" />
                  <p className="text-xs font-semibold text-zinc-300">Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-3xl border border-black/5 bg-white p-4 shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-[#f7f7f5] p-5 text-center"
            >
              <h3 className="text-xl font-black text-[#1f1f1f]">
                {stat.value}
              </h3>
              <p className="mt-1 text-sm font-semibold text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#c49c00]">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1f1f1f] sm:text-4xl">
            Import support designed for pre-order businesses.
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-600">
            Whether customers order goods in bulk or individually, Rosella’s
            gives them a simple way to follow the shipment journey.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5c400]/15 text-[#c49c00] transition group-hover:bg-[#f5c400] group-hover:text-[#1f1f1f]">
                  <Icon size={28} />
                </div>

                <h3 className="text-lg font-black text-[#1f1f1f]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#c49c00]">
              Why Choose Rosella’s
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1f1f1f] sm:text-4xl">
              Clear updates, trusted support, and a simple tracking experience.
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-600">
              Many customers worry when they order goods from China because they
              do not know where their items have reached. This website gives
              them a professional tracking experience and builds trust in the
              import process.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#f7f7f5] p-5">
                <ShieldCheck className="mb-3 text-[#c49c00]" />
                <h3 className="font-black">Reliable Process</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Customers can follow the progress of their goods from order to
                  arrival.
                </p>
              </div>

              <div className="rounded-3xl bg-[#f7f7f5] p-5">
                <BadgeCheck className="mb-3 text-[#c49c00]" />
                <h3 className="font-black">Better Customer Trust</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Shipment updates reduce uncertainty and improve communication.
                </p>
              </div>

              <div className="rounded-3xl bg-[#f7f7f5] p-5">
                <Globe2 className="mb-3 text-[#c49c00]" />
                <h3 className="font-black">China-Ghana Focus</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Built around the needs of importers and pre-order customers.
                </p>
              </div>

              <div className="rounded-3xl bg-[#f7f7f5] p-5">
                <ClipboardCheck className="mb-3 text-[#c49c00]" />
                <h3 className="font-black">Simple Tracking</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Customers only need their tracking ID or order number.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#202020] p-6 text-white shadow-2xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5c400] text-[#1f1f1f]">
                  <Warehouse size={25} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-400">
                    Cargo Status
                  </p>
                  <h3 className="text-xl font-black">
                    Customer Order Dashboard
                  </h3>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  ["Order ID", "RS-1028-GH"],
                  ["Origin", "Guangzhou, China"],
                  ["Destination", "Cape Coast, Ghana"],
                  ["Shipping Method", "Sea Freight"],
                  ["Current Stage", "In Transit"],
                  ["Estimated Update", "3–5 business days"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-white/[0.06] px-4 py-4"
                  >
                    <span className="text-sm text-zinc-400">{label}</span>
                    <span className="text-right text-sm font-bold text-white">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#f5c400] p-5 text-[#1f1f1f]">
                <p className="text-sm font-bold">Latest Update</p>
                <p className="mt-2 text-sm leading-6 font-medium">
                  Your goods have left the China warehouse and are currently in
                  transit to Ghana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#c49c00]">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1f1f1f] sm:text-4xl">
            From pre-order to pickup, customers stay informed.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#202020] text-lg font-black text-[#f5c400]">
                {step.number}
              </div>

              <h3 className="text-lg font-black text-[#1f1f1f]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#202020] shadow-2xl">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#f5c400]">
                Need help with your shipment?
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                Contact Rosella’s for import enquiries, shipment updates, and
                cargo support.
              </h2>

              <div className="mt-8 grid gap-4 text-sm text-zinc-300 sm:grid-cols-2">
                <a
                  href="tel:0556963283"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <Phone className="text-[#f5c400]" />
                  <span>0556963283</span>
                </a>

                <a
                  href="mailto:rosellasimports@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <Mail className="text-[#f5c400]" />
                  <span>rosellasimports@gmail.com</span>
                </a>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Clock className="text-[#f5c400]" />
                  <span>Mon – Friday, 8:00am to 5:00pm</span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <MapPin className="text-[#f5c400]" />
                  <span>Office: UCC Kwesi Prah</span>
                </div>
              </div>
            </div>

            <div className="flex items-center lg:justify-end">
              <div className="w-full rounded-3xl bg-[#f5c400] p-6 text-[#1f1f1f] lg:max-w-sm">
                <h3 className="text-2xl font-black">
                  Start tracking your goods today.
                </h3>

                <p className="mt-3 text-sm leading-7 font-medium">
                  Enter your tracking number and get the latest available
                  shipment status.
                </p>

                <Link
                  href="/tracking"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1f1f1f] px-6 py-4 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
                >
                  Track Shipment
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;