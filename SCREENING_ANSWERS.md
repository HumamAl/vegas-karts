# Screening Answers — Vegas Karts

---

**1. Portfolio links (live websites & apps)**

Most relevant to what you're building:

- Vegas Karts demo (built for this proposal): {VERCEL_URL}
- Sienna Charles — luxury vendor booking platform with availability management and spend tracking: https://sienna-vendor-admin.vercel.app
- Lynt Marketplace — vendor onboarding, listings, transaction tracking: https://lynt-marketplace.vercel.app
- DealerHub — multi-tenant ops platform (inventory, lead pipeline, revenue tracking): https://dealer-platform-neon.vercel.app

---

**2. Projects with booking/payment integrations**

Built a Creator Economy platform on Stripe Connect with split payouts from viewer to creator — the same commission-routing architecture Viator and FareHarbor use for OTA bookings. Also built intake-to-pipeline CRM flows handling payment capture at conversion. The Vegas Karts demo includes a simulated OTA booking flow.

---

**3. Recommended tech stack**

- **Website**: Next.js (App Router) + TypeScript + Tailwind CSS — fast, SEO-optimized, Vercel-deployed
- **Mobile app**: React Native (Expo) — single codebase for iOS and Android, shared logic with the web backend
- **Backend/API**: Node.js on AWS (Lambda or EC2) + PostgreSQL — scales with booking volume, handles OTA webhooks cleanly
- **Payments**: Stripe — recurring billing for Insider Pass, one-time for walk-in bookings, partner discount codes
- **OTA integrations**: Viator API, FareHarbor, Airbnb Experiences via webhook + polling; Booking.com via channel manager

---

**4. Estimated timeline**

- **Website MVP** (booking, payments, waivers, Insider Pass): 4–6 weeks
- **App MVP** (iOS + Android via Expo, gamified achievements, rider profile): 6–8 weeks after website foundation is in place

These are realistic estimates for a clean, production-quality build — not a rushed prototype.

---

**5. Monthly maintenance rate**

Depends on scope — active feature development, OTA integration monitoring, and on-call support are different workloads. I'd rather scope this after understanding your post-launch roadmap than give a number that doesn't fit. Happy to outline a tiered structure on a call.

---

**6. Why I'd be a strong fit**

24+ shipped projects across 15+ industries — including booking platforms, marketplace payment flows, and multi-location ops tools. I work as a long-term technical partner, not a ticket-closer: I flag architecture decisions early, write code the next developer can read, and stay in sync with the product as it grows. The Vegas Karts demo was built before reaching out — that's how I approach every engagement.
