<div align="center">

# 🍕 Pizza Times

**Dhaka's Late-Night Artisan Pizza — Wood-Fired at 450°C**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-pizza--times.vercel.app-E63946?style=for-the-badge&logo=vercel&logoColor=white)](https://pizza-times.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)

A cinematic, dark-themed pizza ordering SPA built for Dhaka's late-night crowd. Features a full cart system, live price estimator, custom topping builder, and delivery to 9 Dhaka neighborhoods — all with Cash on Delivery till 4:00 AM.

</div>

---

## Features

### Animated Intro Loader
A spinning pizza loader plays on first visit before the main app mounts, setting the late-night mood.

### Glassy Sticky Navbar
- Active section highlighting that updates on scroll
- Cart icon with live item count badge
- Smooth scroll navigation to all page sections

### Cinematic Hero Section
- Full-screen atmospheric hero with dual CTAs: **Explore Menu** and **Instant Order**
- Ambient radial glow layers (red + yellow) in the background

### Scrolling Marquee Ribbon
Horizontal auto-scrolling ticker tape displaying brand slogans and late-night vibes between sections.

### Bento Bestsellers Grid
Featured bestseller pizzas displayed in a bento-style grid layout with quick **Add to Cart** actions.

### Full Menu Section with Category Filters
Browse all 6 signature pizzas with filtering by category:

| Pizza | Category | Price (BDT) | Spiciness | Tag |
|---|---|---|---|---|
| Naga Inferno | Spicy | ৳890 | 🌶🌶🌶 | BESTSELLER |
| Old Town Seekh Pizza | Fusion | ৳1,050 | 🌶🌶 | CHEF SPECIAL |
| Puran Dhaka Kacchi Pizza | Fusion | ৳1,190 | 🌶 | NEW |
| Late-Night Triple Pepperoni | Cheese-Heavy | ৳950 | 🌶 | LATE NIGHT SPECIAL |
| Sultans Four-Cheese Feast | Cheese-Heavy | ৳850 | — | BESTSELLER |
| Dhaka Classic Margherita | Classic | ৳690 | — | — |

Each card shows the Bengali name, ingredient list, spiciness level (0–3), and category tag.

### Craft Section — How We Make It
Three-step wood-fire process walkthrough:
1. **48H Sourdough** — slow cold-fermentation for complex crust flavour
2. **The Secret Sauce** — San Marzano tomatoes + local buffalo mozzarella + mustard oil
3. **Wood Fired at 450°C** — 90-second bake in a seasoned fruitwood brick oven

### Customer Reviews Carousel
Auto-playing testimonials carousel from real Dhaka customers with star ratings, role, and neighborhood.

---

## Cart System

### Slide-In Cart Drawer
A spring-animated side panel (Framer Motion) slides in from the right with:

- **Per-item quantity controls** (min: 1, cannot go below)
- **Custom extra toppings** — tap to toggle for each cart item individually
- **Per-item price calculation** — base + toppings × quantity
- **Remove individual items** or clear the entire cart

### Extra Toppings (Add-Ons)

| Topping | Price |
|---|---|
| Extra Mozzarella | +৳120 |
| Crispy Beef Pepperoni Cups | +৳150 |
| Charred Mutton Seekh Kebab Chunks | +৳180 |
| Sylheti Naga Chili Hot Paste | +৳50 |
| Fried Garlic Confit | +৳60 |
| Local Wild Honey Drizzle | +৳70 |
| Caramelized Onion Beresta | +৳40 |

### Delivery to 9 Dhaka Neighborhoods

| Area | Delivery Fee |
|---|---|
| Gulshan | ৳100 |
| Banani | ৳100 |
| Mohakhali | ৳100 |
| Baily Road | ৳110 |
| Dhanmondi | ৳120 |
| Bashundhara R/A | ৳120 |
| Mirpur | ৳140 |
| Uttara | ৳150 |
| Puran Dhaka (Old Town) | ৳150 |

### Live Pricing Breakdown
The cart footer and order form both show a real-time bill:
- **Subtotal** (pizza base + toppings × qty)
- **VAT & Service Charge** — 10% (standard BD restaurant rate)
- **Courier charge** — varies by area
- **Grand Total (COD)**

### Order Confirmation Ticket
After placing an order, an animated success screen appears showing:
- Unique order code (`PT-XXXXXX`)
- Estimated arrival: 35–45 minutes
- Delivery area and grand total payable

### Cart Persistence
Cart state is saved to `localStorage` (`pizza_times_cart`) so items survive page refreshes.

---

## Order Builder Form

A dedicated full-page section with a **4-step pizza customizer**:

1. **Choose base pizza** — dropdown with all 6 pizzas and BDT prices
2. **Add gourmet extras** — toggle-button grid for all 7 toppings
3. **Select Dhaka neighborhood** — dropdown with courier cost
4. **Contact details** — name, BD phone number, and full delivery address

### Live Cost Estimator Panel (Right Column)
Updates in real time as selections change — shows itemised breakdown and grand total.

### Live Countdown Timer
A ticking `HH:MM:SS` countdown widget counts down to **4:00 AM** delivery cutoff, looping overnight for atmosphere.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.8 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Motion (Framer Motion) v12 |
| Icons | Lucide React |
| AI SDK | Google GenAI (`@google/genai`) |
| Server | Express 4 |
| Runtime | Node.js |

---

## Running Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Set your Gemini API key
# Copy .env.example to .env.local and fill in the key
cp .env.example .env.local

# 3. Start dev server (http://localhost:3000)
npm run dev
```

Other scripts:

```bash
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # TypeScript type check
```

---

## Project Structure

```
pizza-times/
├── src/
│   ├── components/
│   │   ├── Loader.tsx          # Intro spinner
│   │   ├── Navbar.tsx          # Sticky nav with scroll tracking
│   │   ├── Hero.tsx            # Full-screen hero
│   │   ├── Marquee.tsx         # Scrolling ribbon
│   │   ├── BentoBestsellers.tsx # Bento grid
│   │   ├── MenuSection.tsx     # Full menu + category filters
│   │   ├── CraftSection.tsx    # Wood-fire process steps
│   │   ├── ReviewsCarousel.tsx # Testimonials carousel
│   │   ├── OrderCTA.tsx        # Mid-page order CTA
│   │   ├── OrderForm.tsx       # 4-step order builder + estimator
│   │   ├── CartDrawer.tsx      # Slide-in cart with checkout
│   │   ├── Reviews.tsx         # Reviews component
│   │   └── Footer.tsx          # Footer
│   ├── data/
│   │   └── pizzaData.ts        # Pizzas, toppings, areas, craft steps
│   ├── types.ts                # MenuItem, Testimonial, Topping types
│   ├── App.tsx                 # Root — cart state, scroll tracking
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Design System

- **Background:** Near-black `#0f0c09` with atmospheric blur glows
- **Primary Red:** `brand-red` — CTAs, tags, active states, glow shadows
- **Accent Yellow:** `brand-yellow` — totals, highlights, success states
- **Text:** Cream off-white for readability on dark backgrounds
- **Typography:** Display font for headings (uppercase, tracked), Outfit for UI, monospace for prices and order codes
- **Animations:** Spring physics (Framer Motion) for drawer, fade/scale for tickets, `animate-ping` for live indicators

---

## License

Apache-2.0 — see individual source files for license headers.
