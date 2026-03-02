# Domain Knowledge Brief — Street-Legal Go-Kart Tour Experience (Las Vegas)

## Sub-Domain Classification

Independent street-legal go-kart tour operator (boutique launch-phase, 3 circuits, 1 city, 10-60 riders/day) blending Japanese drift culture aesthetics, gamified rider progression, costume immersion, and social media virality. This is NOT a track venue — it is an outdoor urban tourism experience product with a strong brand identity, closer in DNA to Tokyo street karting companies (Street Kart, Kartzilla, JapanKart) than to K1 Speed or Vegas Superkarts. Key differentiators: cityscape routes, costumes, achievement systems, social integration, and brand partnership ecosystem.

---

## Job Analyst Vocabulary — Confirmed and Extended

### Confirmed Primary Entity Names

These words must appear in every UI label — sidebar nav, table headers, KPI card titles, status badges, search placeholders.

- Primary record type: **"ride"** or **"session"** (not "order" or "booking") — drift/tour operators say "your ride" not "your reservation"
- People roles: **"rider"** (not "customer" or "guest"), **"guide"** (not "driver" or "staff"), **"marshal"** (safety supervisor on circuit)
- Tour product: **"circuit"** (not "track" or "route") — Strip Circuit, Red Rock Desert Run, Downtown Drift Zone
- Group entity: **"crew"** (not "group" or "party") — gaming/drift culture term for a group booking
- Experience tier: **"run"** (one circuit completion), **"session"** (a booked time block including pre-ride briefing + run + photo stop)
- Loyalty tier: **"Insider Pass"** (client's own term — keep exactly this)
- Achievements: **"badge"** or **"achievement"** (not "trophy" at this price point)
- Performance data: **"lap stats"** or **"ride stats"** (not "race results")
- Waiver: **"release form"** (street-legal tours use this more formally than "waiver")

### Expanded KPI Vocabulary

Beyond what the Job Analyst captured — the exact names of metrics this industry tracks.

| KPI Name | What It Measures | Typical Format |
|---|---|---|
| Daily Rider Count | Total riders completing sessions per day | count (e.g., 47) |
| Session Fill Rate | % of available slots with confirmed bookings | % (e.g., 73%) |
| Average Ticket Value (ATV) | Revenue per rider including add-ons | $ (e.g., $94.50) |
| Repeat Rider Rate | % of bookings from returning riders | % (e.g., 22%) |
| Insider Pass Conversion | % of first-timers who buy the membership | % (e.g., 11%) |
| OTA vs. Direct Split | Ratio of Viator/GetYourGuide bookings vs. direct web | % (e.g., 58% OTA / 42% direct) |
| Waiver Completion Rate | % of confirmed bookings with signed release form pre-arrival | % (e.g., 84%) |
| Check-In Rate | % of confirmed bookings that actually show (vs. no-show) | % (e.g., 91%) |
| Circuit Popularity Score | Relative booking volume per circuit | rank or % share |
| Social Share Rate | % of riders who post tagged content during/after ride | % (e.g., 14%) |
| Achievement Unlock Rate | Avg achievements earned per rider session | count (e.g., 2.3) |
| Net Promoter Score (NPS) | Rider satisfaction likelihood to recommend | score –100 to +100 (e.g., +67) |
| Costume Upgrade Rate | % of riders who select a premium costume upgrade | % (e.g., 38%) |

### Status Label Vocabulary

Exact status strings for data tables, badges, and filter dropdowns.

- **Pre-ride states**: `Pending`, `Confirmed`, `Waiver Pending`, `Waiver Complete`, `Checked In`
- **Active states**: `Briefing`, `Riding`, `Photo Stop`, `In Progress`
- **Post-ride states**: `Completed`, `Stats Ready`, `Photo Ready`
- **Problem states**: `No-Show`, `Cancelled`, `Weather Hold`, `Kart Issue`, `Flagged`
- **Membership states**: `Active`, `Expiring Soon`, `Expired`, `Paused`
- **Achievement states**: `Unlocked`, `In Progress`, `Locked`

### Workflow and Action Vocabulary

Verbs used in this domain — button labels, action menu items, empty state messages.

- Primary actions: **"Book a Ride"**, **"Check In"**, **"Start Briefing"**, **"Launch Session"**, **"Flag Rider"**
- Secondary actions: **"Reassign Kart"**, **"Issue Weather Hold"**, **"Send Waiver Link"**, **"Upload Ride Photo"**, **"Award Badge"**
- Admin actions: **"Review Stats"**, **"Export Rider Report"**, **"Process Refund"**, **"Add to Crew"**
- Marketing actions: **"Generate Referral Code"**, **"Activate Partner Discount"**, **"Send Ride Recap"**

### Sidebar Navigation Candidates

5-8 navigation items using domain vocabulary.

- **Live Circuits** (real-time session status across all 3 circuits — the command center)
- **Ride Calendar** (booking schedule view — not "Bookings" or "Orders")
- **Rider Profiles** (CRM for rider history, stats, achievements, membership)
- **Leaderboard** (performance rankings by circuit, weekly/all-time)
- **Achievements** (badge management and unlock criteria)
- **Partner Hub** (brand partnership discount codes and co-marketing)
- **Ride Media** (photo/video uploads and social share management)
- **Analytics** (revenue, fill rates, OTA vs. direct, seasonal trends)

---

## Design Context — Visual Language of This Industry

### What "Premium" Looks Like in This Domain

Vegas Karts is explicitly NOT a standard go-kart venue — the client says "we are building a category." Their visual language has more in common with Tokyo street karting brands and high-energy gaming/entertainment apps than with traditional tourism. The reference frame should be: **Street Kart Tokyo + Fortnite-era gamification UI + a premium Las Vegas nightlife brand.**

The dark base (near-black, not true black) is standard in this space. Neon accent colors — specifically electric purple, hot pink/magenta, and cyan — are directly inherited from Japanese drift culture and Las Vegas neon sign iconography simultaneously. This is not a coincidence: it is the exact overlap that makes Vegas Karts' brand legible to both audiences. The color palette signals "we belong in this city AND we belong in this subculture."

Typography in this domain skews toward geometric sans-serifs or slightly display-influenced fonts — Rajdhani, Bebas Neue, or Geist with heavy weight for headings. Monospace for stats and performance data. Uppercase tracking-wide labels for status badges and category tags give the operational/racing-monitor feel that practitioners in this space recognize.

Layout density is moderate to high. Go-kart tour operators who have invested in rider-facing apps expect information-dense screens with multiple live data points — not spacious marketing pages. The dashboard should feel like a racing operations center: stat bars at top, circuit status cards, real-time rider queue, leaderboard widget.

### Real-World Apps Clients Would Recognize as "Premium"

1. **Street Kart Tokyo** (streetkart.com / kart.st) — The Tokyo reference brand for exactly this product category. Dark base, neon accents, circuit selection cards, costume gallery. Uses high-contrast typography and bokeh/motion photography. The Vegas Karts client would immediately recognize this as their direct spiritual predecessor. Visual patterns: card grids with glowing hover borders, circuit selection with animated route preview, photo gallery with social integration.

2. **RaceFacer** — The go-kart industry's social performance platform. Rider profiles with persistent stats (best lap time, total driven km, visit count), leaderboards by circuit and time period, achievement badges. The data architecture and terminology from RaceFacer is exactly what Vegas Karts should mirror in its admin dashboard. Key patterns: stat cards with monospace numerics, ranked list views, driver profile with race history timeline.

3. **Fortnite / Gaming Achievement UI** (as reference point, not competitor) — The gamification layer (achievements, leaderboards, unlock animations) should reference modern gaming UI conventions that their target demographic (21-40 adventure tourists and local enthusiasts) is deeply familiar with. Progress bars, badge unlock animations, XP-style point accumulation, season pass mechanics. This is the layer that makes Vegas Karts feel "not like a normal tour company."

### Aesthetic Validation

- **Job Analyst chose**: Dark Premium
- **Domain validation**: Confirmed and strongly reinforced. The client's existing website uses dark/neon purple/pink/cyan which is the exact Dark Premium palette territory. Their brand voice ("we are building a category"), cultural references (Japanese drift culture, costumes, gamification), and target market (adventure-seeking tourists + local enthusiasts) all map precisely to Dark Premium. This aesthetic creates immediate credibility — a client who has thought deeply about their brand will feel "this developer studied what we built."
- **One adjustment**: Pull the electric purple primary slightly warmer — closer to `oklch(0.55 0.28 295)` than a pure cool blue-violet, to match the magenta-leaning neon purple on their existing site. The accent cyan should be `oklch(0.80 0.18 195)` — the vibrant but not oversaturated cyan of Las Vegas signage.

### Format Validation

The job describes two deliverables: a "high-end cinematic website" AND a "gamified mobile app." These are two different products.

- **For the website (primary demo)**: The `dashboard-app` format best showcases the admin/operations layer that any serious tour company needs — circuit management, rider pipeline, booking analytics, leaderboard. This is what a technical client evaluating a developer would want to see built. A landing page would not show technical capability.
- **For the mobile app layer**: The demo could include a feature page showing the rider-facing mobile experience (phone frame embedded within a feature page), but the primary Tab 1 format should be `dashboard-app`.
- **Job Analyst chose**: If they chose `mobile-app-preview` or `landing-page`, flag this as a potential mismatch — the strongest demo for this project is a dashboard-app that shows operational sophistication AND references the consumer app within it.
- **Format-specific design notes**: Dark sidebar with neon primary color active states. Circuit cards with live status badges. Rider queue as a real-time feed widget. Leaderboard as a featured panel. Stats use monospace numerics with glow treatment on the primary KPI.

### Density and Layout Expectations

**Moderate-to-high density** is expected and appropriate. This domain's practitioners are either:
1. Operations staff managing live sessions (need information density — who's riding, circuit status, waiver queue)
2. The founders themselves (who want to see business KPIs at a glance without clicking through layers)

Neither audience wants a spacious, airy layout. Standard shadcn card padding works; do not increase whitespace. The dashboard should feel like a racing operations center rather than a marketing overview.

**Layout tendency**: Mixed — the booking/rider queue views are list-heavy (tables with status badges), but the main dashboard and circuit overview pages are card-heavy (circuit cards, stat cards, achievement cards). The leaderboard is always a ranked list.

---

## Entity Names (10+ realistic names)

### Companies / Organizations (Partner Brands)

Realistic Las Vegas-area business partners and sponsors for the Vegas Karts brand:

- Red Rock Canyon Adventures Co.
- Neon District Media (content/social partner)
- Vegas Motorsports Academy
- Desert Circuit Apparel
- The High Roller Experience Group
- BLVD Outfitters (costume/gear partner)
- Quantum Energy (beverage sponsor)
- Fremont Street Events LLC
- Velocity Vegas (tourism package reseller)
- Silver State Kart Supply

### People Names (Role-Appropriate)

Riders, guides, and operations staff typical for a Las Vegas tourism and motorsport workforce:

**Guides/Staff:**
- Marco Reyes (Lead Guide, Strip Circuit)
- Kayla Thornton (Operations Manager)
- Daisuke "Dice" Watanabe (Head Guide — authentically Japanese-American, fits drift culture brand)
- Brianna Castillo (Rider Onboarding)
- Tyler Oshiro (Kart Technician)

**Riders (tourist demographic mix):**
- Alex Mercer
- Priya Nandakumar
- Jake Sullivan
- Chloe Beaumont
- Devon Richardson
- Tariq Al-Rashid
- Megan Liu
- Rafael Santos
- Samantha Kowalski
- Ethan Park

### Products / Services / SKUs

Circuits, add-ons, and merchandise:

**Circuits:**
- Strip Circuit — $89/rider (2.1 mi route along the Strip corridor)
- Red Rock Desert Run — $79/rider (canyon backdrop, 3.4 mi desert circuit)
- Downtown Drift Zone — $99/rider (Fremont Experience district, 1.8 mi urban circuit)
- Lake Las Vegas Expansion (Coming Soon) — projected $109/rider

**Add-Ons:**
- Costume Upgrade (premium character kit) — $19
- Ride Recap Video Package (Insta360 footage) — $29
- Crew Photo Pack (group session photos) — $24
- Express Check-In (skip waiver queue, pre-registered) — $9
- Insider Pass Annual Membership — $149/year (10% off all rides + priority booking)

**Partner Packages:**
- Velocity Vegas Bundle (hotel + ride combo) — $129
- Bachelor Circuit Package (crew of 6-12, Strip Circuit) — $74/rider with group rate

---

## Realistic Metric Ranges

| Metric | Low | Typical | High | Notes |
|--------|-----|---------|------|-------|
| Daily rider count (launch phase) | 12 | 34 | 67 | Las Vegas tourist volume is high but operation is new; 34/day is realistic in months 4-8 |
| Session capacity (per time slot) | 4 | 8 | 14 | Street circuits limit group size for safety and route management |
| Average ticket value (ATV) | $79 | $94 | $127 | Base circuit + common add-ons (video pack, costume); group discounts pull down |
| Session fill rate | 45% | 71% | 94% | Lower in summer heat (July-Aug), spikes on weekends and peak season |
| Check-in rate (vs. confirmed) | 78% | 91% | 99% | No-shows higher on hot days; Express Check-In holders show at 98%+ |
| Waiver pre-completion rate | 60% | 84% | 97% | Higher when waiver link sent >24h before session |
| Repeat rider rate | 8% | 22% | 41% | Higher for Insider Pass holders; locals drive repeat more than tourists |
| Insider Pass conversion (1st-timers) | 5% | 11% | 19% | Increases significantly post-ride vs. at-booking |
| OTA commission rate | 15% | 20% | 30% | Viator typically 20%; GetYourGuide 20-25%; direct bookings no commission |
| Direct booking % | 24% | 42% | 65% | Goal is to grow direct to 60%+ via Insider Pass and email capture |
| Social share rate | 6% | 14% | 31% | Higher for costume upgrade purchasers; Ride Recap Video drives organic posts |
| NPS score | +42 | +67 | +82 | Top-quartile adventure tours score +65 or above |
| Revenue per operating day | $980 | $3,196 | $6,240 | At 34 riders avg ATV $94 = $3,196; peaks on premium weekend nights |
| Average achievement unlock/rider | 1.1 | 2.3 | 4.7 | Gamification engagement correlates with Insider Pass conversion |
| Partner discount redemption rate | 3% | 9% | 18% | Hotel partner codes redeem at higher rates than general promo codes |

---

## Industry Terminology Glossary (10+ terms)

| Term | Definition | Usage Context |
|------|-----------|---------------|
| Circuit | A specific route ridden on street-legal go-karts through a defined urban or scenic area | Primary product unit: "Strip Circuit", "Red Rock Desert Run" |
| Rider | A paying participant in a go-kart session (not "customer") | All CRM, booking, and communication surfaces |
| Crew | A group booking (bachelor/bachelorette, corporate, friends) | Group booking flow, CRM segmentation |
| Session | A time-block containing check-in, briefing, the circuit run, and post-ride photo stop | Scheduling, operations calendar |
| Briefing | The pre-ride safety and route orientation, typically 10-15 minutes | Session stage in the ops pipeline |
| Guide | The staff member who leads the circuit run and provides commentary | Staffing, assignment, communications |
| Marshal | A safety supervisor stationed at critical points on the circuit | Safety protocol, incident reporting |
| Waiver / Release Form | Legal liability release that all riders must sign before riding | Pre-check-in stage gate |
| Insider Pass | Vegas Karts' annual membership tier granting priority booking and discounts | Loyalty program, CRM segment |
| Lap Stats / Ride Stats | Performance metrics captured during the session (top speed, route time, sector splits) | Gamification layer, rider profile |
| Achievement / Badge | Gamified reward for completing specific milestones (first ride, 5 rides, night session, etc.) | App gamification, rider profile |
| Leaderboard | Ranked performance standings by circuit, weekly or all-time | Gamification, app home screen, marketing |
| OTA | Online Travel Agency — Viator, GetYourGuide, Expedia, Klook. Aggregators where riders discover and book tours | Revenue channel, booking source tracking |
| FareHarbor | The dominant booking/ticketing platform for tour operators; integrates with OTAs | Booking infrastructure |
| Insta360 | Action camera brand mounted on karts to capture rider footage | Media, Ride Recap Video product |
| Add-On | Optional upsell purchased at or before booking (video pack, costume upgrade, express check-in) | Revenue optimization, booking flow |
| Drift Culture | Aesthetic/subculture origin (Japanese motorsport) that informs the brand's visual identity | Brand language, costume selection |
| Weather Hold | Operational status when a session is paused or cancelled due to unsafe weather conditions | Status badge in ops dashboard |
| No-Show | Confirmed booking where rider does not arrive | Ops metric, recovery workflow |
| Partner Discount | Promotional code from a brand partner (hotel, casino, sponsor) redeemable at booking | Partner Hub, revenue tracking |

---

## Common Workflows

### Workflow 1: Rider Booking → Check-In → Session Completion

1. Rider discovers via Viator/GetYourGuide/direct web
2. Selects circuit, date, time slot, crew size
3. Chooses add-ons (costume upgrade, video pack)
4. Enters payment — FareHarbor processes transaction
5. Receives confirmation email with waiver link
6. Completes digital release form (ideally 24h before)
7. Day-of: arrives at meeting point, guide scans QR code (Express Check-In) or verifies booking
8. Briefing (10-15 min): safety rules, kart controls, route overview, costume assignment
9. Circuit run: guide leads group at regulated speed, marshals positioned at intersections
10. Photo stop: group photo opportunity mid-route
11. Return to start: kart handoff, high-fives
12. Post-ride: Ride Recap Video delivered by email/SMS, achievement badges unlocked in app
13. Prompt for review (TripAdvisor, Google, Viator) within 2 hours post-ride

### Workflow 2: Insider Pass Enrollment

1. Rider completes first session
2. In-app prompt: "Join the Insider Pass — 10% off every ride, priority booking, exclusive badges"
3. Rider enters payment for $149/year membership
4. Membership activates immediately — future booking flow shows discounted rates
5. App unlocks "Insider Pass Holder" badge + exclusive leaderboard tier
6. Monthly: member receives early access to new circuits and partner offers
7. 30 days before expiry: automated renewal prompt with "Founding Member" rate offer

### Workflow 3: Partner Discount Code Lifecycle

1. Brand partner (hotel concierge, casino rewards desk) receives unique discount code batch
2. Partner distributes codes to guests at point of recommendation
3. Rider enters code at booking — discount applied, attribution tracked
4. Ops dashboard shows conversion by partner code for performance reporting
5. Monthly: Partner Hub shows each partner's code performance (views, uses, revenue attributed)
6. Auto-refresh: high-performing partners get expanded code batches; low-performers get outreach

---

## Common Edge Cases

1. **Weather Hold** — Desert heat in July-August (110°F+) or rare wind events can halt outdoor circuits mid-day. Sessions marked "Weather Hold" need rescheduling workflow; refund or reschedule credit must be issued within 2 hours.
2. **No-Show with Prepaid Waiver** — Rider completes waiver but does not arrive. Session slot goes partially unfilled. OTA non-refund policies create customer service friction.
3. **Waiver Incomplete at Check-In** — Rider arrives without completing release form. Creates check-in bottleneck and delays session start. Edge case records should show "Waiver Pending" status with arrival timestamp.
4. **Undersized Crew** — Group booking for 8 riders, only 5 show up. Revenue gap vs. expectation; guide must decide whether to merge with another group or run partial.
5. **Costume Size Out-of-Stock** — Rider purchased costume upgrade but requested size unavailable. Substitution required; potential dissatisfaction signal in NPS.
6. **Kart Issue Mid-Session** — Mechanical issue during circuit run requires guide to manage kart swap at nearest marshal point. Session paused; rider profile flagged for complimentary add-on.
7. **OTA Double-Booking** — Rare race condition where OTA inventory sync lag creates two bookings for the same slot. Requires manual resolution and one-party reschedule.
8. **Insider Pass Holder Complaint** — High-value member raises issue post-ride. Flagged as P0 in CRM; requires direct founder/manager response. Retention risk.
9. **Record-Setting Lap** — Rider achieves new circuit best time. Triggers "Circuit Record" achievement badge and automatic leaderboard notification to all active app users.
10. **Zero-Booking Day** — Off-season day with no confirmed sessions. Dashboard should show "No sessions scheduled" empty state without breaking any KPI calculations.

---

## What Would Impress a Domain Expert

1. **FareHarbor + OTA commission logic**: Serious tour operators obsess over the OTA vs. direct split. Viator takes 20% commission; direct bookings net 94% (after FareHarbor's ~6% processing). Showing an "OTA Commission Cost" metric in the analytics view — with a delta showing money saved by direct bookings — signals genuine understanding of tour operator economics.

2. **Waiver compliance as a session gate**: In Nevada, street-legal vehicle tours require signed liability releases for every participant. The system must show waivers as a hard gate before check-in status advances. Showing a "Waiver Completion Rate" KPI and a pre-arrival email automation that sends the waiver link 48h before the session is an insider detail that validates operational credibility.

3. **Seasonal heat abatement patterns**: July and August in Las Vegas routinely hit 107-115°F. Professional outdoor tour operators reduce afternoon sessions and sometimes suspend all daytime outdoor operations for 6-8 weeks. Any analytics view showing seasonal booking trends should dip visibly in July-August and peak in March-May / September-November — not show flat or growing volume year-round.

4. **RaceFacer-style persistent rider profiles**: Go-kart platforms that stick with riders long-term store cumulative stats across sessions: total miles ridden, circuit best times, visit count, achievement collection. This is not generic CRM — it is the specific data model that distinguishes a gamified experience product from a generic tour booking system.

5. **Drift culture vocabulary in costume categories**: The client specifically references "costumes" and "cultural immersion." Authentic costume categories in Tokyo-inspired street karting include "Drift King" (Keiichi Tsuchiya tribute), "Circuit Ninja," "Neon Racer," "Tokyo Tourist," and character themes. Using these naming conventions — rather than generic "Costume Type A/B" — would signal that the developer has actually researched the subculture context.

---

## Common Systems & Tools Used

| Tool | Purpose | Relevance |
|---|---|---|
| **FareHarbor** | Booking platform for tour operators — ticketing, waivers, OTA sync, POS | Primary booking infrastructure |
| **Viator** | OTA with largest tour inventory; takes ~20% commission | Primary discovery channel |
| **GetYourGuide** | Second-largest OTA, common in international tourist segments | Secondary OTA channel |
| **RaceFacer** | Go-kart management + timing software + social rider network | Lap timing, rider profiles, leaderboard |
| **Clubspeed** | All-in-one go-kart venue management with kart allocation | Alternative timing/venue ops |
| **Insta360** | Action camera mounted on karts for automatic ride footage | Ride Recap Video product |
| **TripAdvisor / Google Reviews** | Primary review platforms for tour experiences | NPS and reputation tracking |
| **Mailchimp / Klaviyo** | Email automation for waiver reminders, post-ride recap, membership renewal | Retention workflow automation |
| **Stripe** (via FareHarbor) | Payment processing | Booking payments |
| **Instagram / TikTok** | Social proof and viral distribution for UGC ride content | Social share KPI |

---

## Geographic / Cultural Considerations

**Las Vegas specifics:**
- **Time zone**: Pacific Time (PT) — booking timestamps, session scheduling, and analytics all in PT
- **Heat seasonality**: July-August outdoor operations restricted to morning (before 11am) and evening (after 6pm) sessions. This is critical for scheduling logic.
- **Peak seasons**: March-May (spring break + mild weather), September-November (fall tourist wave), New Year's week (extreme premium pricing window)
- **Slow periods**: July 4-Labor Day (heat + convention lull), mid-January through February (post-holiday dip)
- **Currency**: USD only; international visitors are significant (Las Vegas draws 40M+ tourists/year, 15-20% international)
- **Legal**: Nevada street-legal vehicle regulations require valid driver's license for all riders. Age minimum typically 18 (or 16 with guardian). These are soft gates in the booking flow.
- **Neighborhoods / Districts**: The Strip (Las Vegas Blvd corridor), Downtown (Fremont Street), Red Rock Canyon (30 min west), Lake Las Vegas (30 min east) — these correspond directly to the 3 existing circuits + expansion

---

## Data Architect Notes

- **Entity names to use**: `rider`, `session`, `circuit`, `crew`, `guide`, `achievement`, `badge`, `insiderPassMember`
- **Revenue per session**: $79-$127 per rider (ATV $94); groups of 4-14 riders per session
- **Status strings** (exact, for TypeScript union types):
  - Session status: `"Pending" | "Confirmed" | "Waiver Pending" | "Waiver Complete" | "Checked In" | "Briefing" | "Riding" | "Completed" | "No-Show" | "Cancelled" | "Weather Hold"`
  - Circuit names: `"Strip Circuit" | "Red Rock Desert Run" | "Downtown Drift Zone" | "Lake Las Vegas"`
  - Membership status: `"Active" | "Expiring Soon" | "Expired" | "Paused"`
  - Achievement status: `"Unlocked" | "In Progress" | "Locked"`
- **Edge cases to include as specific records**:
  - 2-3 sessions with "Waiver Pending" status (check-in imminent but form incomplete)
  - 1-2 "No-Show" sessions with full prepayment
  - 1 "Weather Hold" session with rescheduling note
  - 1 record-setting rider with Circuit Record achievement
  - 1 Insider Pass member with high ride count (8+ sessions, 12+ achievements)
  - 1 undersized crew (booked 8, only 5 showed)
- **Date patterns**: Sessions distributed across days of week with weekend clustering. Summer sessions cluster pre-11am and post-6pm. Monthly revenue chart should dip July-August, spike March-May and September-November.
- **Relational structure**: `sessions` → `riders` (many-to-many via `crewMembers`), `sessions` → `circuits`, `riders` → `achievements`, `riders` → `insiderPass`

## Layout Builder Notes

- **Recommended density**: Standard (not compact, not spacious). The dashboard must feel like an operations center — information-rich but not overwhelming. Card padding at `1.5rem` standard; stat bar items can tighten to `1rem`.
- **Sidebar**: Dark — the sidebar background should be the darkest surface in the layout, close to true black with a slight purple tint (`oklch(0.06 0.02 290)`). Nav item active state uses the neon purple primary with a subtle left-border glow effect.
- **Sidebar width**: Standard 16rem is fine; nav labels are moderate length ("Live Circuits", "Rider Profiles").
- **Status badge treatment**: This domain lives or dies on status visibility. Badges must be color-coded: Confirmed (cyan), Riding (neon green `oklch(0.70 0.22 145)`), No-Show (red), Weather Hold (amber), Completed (muted/gray). Full color spectrum, not just two states.
- **Color nuance**: The primary purple should lean slightly magenta — not cool violet. Use `oklch(0.55 0.28 295)` as primary; the neon cyan accent at `oklch(0.80 0.18 195)`. Avoid pure blue-purple — the Las Vegas neon sign reference is warmer pink-purple, not tech-blue.
- **Typography**: Headings benefit from a heavier geometric sans — Geist Bold at `font-weight: 800` with slight letter-spacing is sufficient. Stat values in Geist Mono for the racing-data feel.
- **Glow effects**: Limited use of box-shadow glow on primary CTA buttons and active nav items is authentic to this aesthetic. `box-shadow: 0 0 16px oklch(0.55 0.28 295 / 0.35)`. Do not over-apply — reserve for maximum of 3-4 elements per screen.

## Demo Screen Builder Notes

- **Single most important metric (hero stat card)**: "Today's Riders" — count of riders completing sessions today. This is the operator's first question every morning.
- **Second hero metric**: "Session Fill Rate" — % of today's slots confirmed. These two together answer "how's today going?"
- **Chart type for trend data**: Area chart for revenue over time (6-12 months, highlighting seasonal dip in summer). Bar chart for circuit popularity comparison (which circuit books most). Recharts area chart with neon purple gradient fill on dark background.
- **Domain-specific panel that would impress**: A **"Live Circuit Status" panel** — three cards, one per circuit, each showing: circuit name, current session status (or "Next: 3:45 PM"), rider count in current session, guide name on duty. This is the real-time ops widget that any serious tour operator would want to see first. Status badges animate between states.
- **Leaderboard widget**: A top-5 rider leaderboard (by circuit best time or total rides) placed on the main dashboard as a secondary panel. Uses rank numbers, rider avatar/initial, circuit name, stat. This is the gamification proof-of-concept that validates the client's vision.
- **Achievement gallery on rider detail page**: When viewing a rider's profile, an achievement badge grid showing unlocked (glowing) vs. locked (muted) badges — this is the "show don't tell" for the gamification system.
- **For the demo format**: If `dashboard-app`, the main dashboard should be: stat row (Today's Riders, Fill Rate, ATV, NPS) → Live Circuit Status cards → Revenue area chart (seasonal) → Leaderboard widget → Recent Sessions table with status badges.
