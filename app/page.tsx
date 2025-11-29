// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400/10 ring-1 ring-emerald-400/40">
              <span className="text-xl">⚡</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">
              AutoFlow
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-emerald-300 transition">
              Features
            </a>
            <a href="#testimonials" className="hover:text-emerald-300 transition">
              Testimonials
            </a>
            <a href="#pricing" className="hover:text-emerald-300 transition">
              Pricing
            </a>
            <a href="#contact" className="hover:text-emerald-300 transition">
              Contact
            </a>
          </nav>

          <a
            href="#pricing"
            className="hidden rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-emerald-300 md:inline-block"
          >
            Get Started
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:px-8">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-200">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              AI for WhatsApp-first businesses
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Automate WhatsApp chats,
              <span className="block text-emerald-300">
                close more customers.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
              AutoFlow connects your WhatsApp with AI so you can onboard leads,
              answer FAQs, and send broadcasts — all without hiring extra agents.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300"
              >
                Start free trial
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 hover:border-emerald-400/70 hover:text-emerald-200"
              >
                View features
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400 sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-emerald-300">★ ★ ★ ★ ★</span>
                <span>Loved by 1,200+ teams</span>
              </div>
              <span className="h-4 w-px bg-slate-700" />
              <span>No credit card required</span>
            </div>
          </div>

          {/* Right side "mockup" */}
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-[0_0_80px_rgba(16,185,129,0.25)]">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  Live chat
                </span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-300">
                  Online
                </span>
              </div>

              <div className="mt-4 space-y-3 text-xs">
                <div className="flex gap-2">
                  <div className="h-7 w-7 rounded-full bg-slate-700/80" />
                  <div className="max-w-[70%] rounded-2xl bg-slate-800/80 px-3 py-2">
                    Hi, do you offer COD for Mumbai?
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <div className="max-w-[70%] rounded-2xl bg-emerald-500 px-3 py-2 text-slate-950">
                    Yes! We offer COD & same-day delivery in Mumbai 🚚
                  </div>
                  <div className="h-7 w-7 rounded-full bg-emerald-400" />
                </div>

                <div className="flex justify-end gap-2">
                  <div className="max-w-[70%] rounded-2xl bg-emerald-500 px-3 py-2 text-slate-950">
                    Want me to send you a payment link?
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                <p className="text-[11px] text-slate-300">
                  AutoFlow suggests replies, tags conversations and syncs all
                  data to your CRM — in real time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mt-20 space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Built for high-intent WhatsApp leads.
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Everything you need to capture, qualify, and convert conversations
              into paying customers — without juggling multiple tools.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-lg">
                🤖
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-50">
                AI Autoreplies
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Answer FAQs in milliseconds with AI trained on your website,
                product docs, and past chats.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-lg">
                📊
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-50">
                Smart Broadcasts
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Segment users by behavior and send targeted campaigns that feel
                personal, not spammy.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-lg">
                ⚙️
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-50">
                CRM & Shopify Sync
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Push every conversation, order and tag into your existing CRM or
                Shopify store in one click.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="mt-20 space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Teams that moved support to AutoFlow.
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              From D2C brands to SaaS, AutoFlow helps teams save hours every
              week and close more sales on autopilot.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm text-slate-200">
                “We turned WhatsApp from a support headache into our #1
                revenue channel — in less than 2 weeks.”
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-50">
                  Riya Sharma
                </p>
                <p className="text-xs text-slate-400">
                  Founder, GlowKart Cosmetics
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm text-slate-200">
                “Our agents only join when needed. AI handles 70% of questions
                and never forgets a follow-up.”
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-50">
                  Aditya Mehta
                </p>
                <p className="text-xs text-slate-400">
                  Head of CX, SwiftShip Logistics
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm text-slate-200">
                “Broadcasts + AutoFlow journeys helped us recover 3x more
                abandoned carts on WhatsApp.”
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-50">
                  Saloni Verma
                </p>
                <p className="text-xs text-slate-400">
                  Marketing Lead, UrbanFits
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING – v0 STYLE */}
        <section id="pricing" className="mt-20 px-0 py-24">
          <div className="mx-auto max-w-6xl px-0 sm:px-0">
            {/* Header */}
            <div className="mb-16 text-center">
              <div className="mb-4 inline-block">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
                  Transparent Pricing
                </span>
              </div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="text-balance">
                  Simple, straightforward pricing for any size business
                </span>
              </h2>
              <p className="text-lg text-slate-400">
                Choose the perfect plan to automate your WhatsApp workflows and scale your business.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Starter */}
              <div className="relative flex flex-col rounded-2xl border border-slate-800/50 bg-slate-900/40 transition-all duration-300 hover:border-slate-700 hover:shadow-lg">
                <div className="flex flex-1 flex-col px-8 py-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-50">Starter</h3>
                    <p className="mt-2 text-sm text-slate-400">
                      For solopreneurs & small stores testing WhatsApp automation.
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-slate-50">₹0</span>
                      <span className="text-slate-400">/month</span>
                    </div>
                  </div>

                  <ul className="mb-8 flex-1 space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300 text-xs">
                        ✓
                      </div>
                      <span className="text-sm text-slate-200">200 AI replies / month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300 text-xs">
                        ✓
                      </div>
                      <span className="text-sm text-slate-200">1 WhatsApp number</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300 text-xs">
                        ✓
                      </div>
                      <span className="text-sm text-slate-200">Basic templates & FAQs</span>
                    </li>
                  </ul>

                  <button
                    className="w-full rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-300 hover:border-emerald-500/60 hover:bg-emerald-500/20"
                  >
                    Get started
                  </button>
                </div>
              </div>

              {/* Growth – Recommended */}
              <div className="relative flex flex-col rounded-2xl border border-emerald-500/50 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 ring-1 ring-emerald-500/20 transition-all duration-300 md:scale-105">
                {/* Recommended Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full border border-emerald-500/50 bg-slate-950 px-4 py-1 text-xs font-semibold text-emerald-300">
                    Recommended
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-8 py-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-50">Growth</h3>
                    <p className="mt-2 text-sm text-emerald-100/80">
                      Best for scaling teams that rely on WhatsApp daily.
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-slate-50">₹3,999</span>
                      <span className="text-slate-200/80">/month</span>
                    </div>
                  </div>

                  <ul className="mb-8 flex-1 space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-xs">
                        ✓
                      </div>
                      <span className="text-sm text-emerald-50/90">10,000 AI replies / month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-xs">
                        ✓
                      </div>
                      <span className="text-sm text-emerald-50/90">3 WhatsApp numbers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-xs">
                        ✓
                      </div>
                      <span className="text-sm text-emerald-50/90">Broadcast campaigns</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-xs">
                        ✓
                      </div>
                      <span className="text-sm text-emerald-50/90">CRM & Shopify sync</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-xs">
                        ✓
                      </div>
                      <span className="text-sm text-emerald-50/90">Priority email support</span>
                    </li>
                  </ul>

                  <button
                    className="w-full rounded-full bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
                  >
                    Start free trial
                  </button>
                </div>
              </div>

              {/* Enterprise */}
              <div className="relative flex flex-col rounded-2xl border border-slate-800/50 bg-slate-900/40 transition-all duration-300 hover:border-slate-700 hover:shadow-lg">
                <div className="flex flex-1 flex-col px-8 py-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-50">Enterprise</h3>
                    <p className="mt-2 text-sm text-slate-400">
                      For large support & sales teams with advanced needs.
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-slate-50">Custom</span>
                    </div>
                  </div>

                  <ul className="mb-8 flex-1 space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300 text-xs">
                        ✓
                      </div>
                      <span className="text-sm text-slate-200">Unlimited AI replies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300 text-xs">
                        ✓
                      </div>
                      <span className="text-sm text-slate-200">Unlimited numbers & agents</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300 text-xs">
                        ✓
                      </div>
                      <span className="text-sm text-slate-200">Dedicated onboarding & success</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300 text-xs">
                        ✓
                      </div>
                      <span className="text-sm text-slate-200">SSO + custom SLAs</span>
                    </li>
                  </ul>

                  <button
                    className="w-full rounded-full border border-emerald-500/30 bg-transparent px-4 py-2.5 text-sm font-semibold text-emerald-300 hover:border-emerald-500/60 hover:bg-emerald-500/10"
                  >
                    Contact sales
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="mt-16 text-center">
              <p className="text-slate-400">
                All plans include a 14-day free trial. No credit card required.
              </p>
              <div className="mt-4 flex justify-center gap-6 text-sm">
                <a href="#" className="text-emerald-300 hover:text-emerald-200">
                  View FAQ
                </a>
                <span className="text-slate-700">•</span>
                <a href="#contact" className="text-emerald-300 hover:text-emerald-200">
                  Contact Sales
                </a>
                <span className="text-slate-700">•</span>
                <a href="#" className="text-emerald-300 hover:text-emerald-200">
                  Compare Plans
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to automate WhatsApp?
              </h2>
              <p className="mt-3 text-sm text-slate-300 sm:text-base">
                Share a few details and we&apos;ll set up a tailored AutoFlow
                workspace for your team in under 24 hours.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Integrate with your existing WhatsApp Business API</li>
                <li>• Import FAQs & flows from your docs</li>
                <li>• Guided onboarding call with our team</li>
              </ul>
            </div>

            <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <div>
                <label className="block text-xs font-medium text-slate-300">
                  Work email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-400/40 focus:border-emerald-400 focus:ring"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300">
                  Company name
                </label>
                <input
                  type="text"
                  placeholder="Company Pvt. Ltd."
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-400/40 focus:border-emerald-400 focus:ring"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300">
                  Monthly WhatsApp conversations
                </label>
                <select
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-400/40 focus:border-emerald-400 focus:ring"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  <option value="0-1k">0 – 1,000</option>
                  <option value="1k-10k">1,000 – 10,000</option>
                  <option value="10k-50k">10,000 – 50,000</option>
                  <option value="50k+">50,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300">
                  What do you want to improve?
                </label>
                <textarea
                  rows={3}
                  placeholder="Eg. reduce support load, recover abandoned carts, onboard leads..."
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-400/40 focus:border-emerald-400 focus:ring"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Request demo
              </button>
              <p className="text-[11px] text-slate-400">
                By submitting, you agree to receive emails about AutoFlow
                product updates. You can unsubscribe anytime.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} AutoFlow Labs. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-emerald-300">
              Privacy
            </a>
            <a href="#" className="hover:text-emerald-300">
              Terms
            </a>
            <a href="#contact" className="hover:text-emerald-300">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
