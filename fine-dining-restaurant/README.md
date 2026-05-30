# L'Étoile — Fine Dining Restaurant Website

A cinematic, single-page restaurant website for **L'Étoile**, a luxury Parisian fine-dining establishment. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

---

## Features

- **Animated splash loader** — branded entry animation before the main content appears
- **Sticky navbar** — highlights the active section as you scroll using an IntersectionObserver
- **Hero section** — full-screen cinematic landing with ambient image overlay and smooth scroll CTAs
- **About section** — chef biography and restaurant heritage split-layout
- **Menu** — categorized (Starters, Mains, Desserts, Drinks) with skeleton loading states and Chef Special tags
- **Featured slider** — horizontal scrolling showcase of Chef's signature dishes
- **Gallery** — masonry-style photo grid with lightbox overlay
- **Testimonials** — critic reviews in an animated carousel
- **Reservation system** — interactive table booking form with a visual seating blueprint, area selector (Le Salon Royal / Le Jardin Terrace / Chef's Counter), and a confirmation receipt screen
- **Footer** — operating hours and contact details

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animation | Motion (Framer Motion) |
| Icons | Lucide React |
| AI SDK | `@google/genai` |

---

## Getting Started

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. (Optional) Set your Gemini API key if using AI features:
   Create a `.env.local` file and add:
   ```
   GEMINI_API_KEY=your_key_here
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app runs at `http://localhost:3000`.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | TypeScript type-check (no emit) |
| `npm run clean` | Remove `dist/` and `server.js` |

---

## Project Structure

```
src/
├── components/
│   ├── About.tsx          # Chef story section
│   ├── Featured.tsx       # Horizontal chef-specials slider
│   ├── Footer.tsx         # Operating hours & contact
│   ├── Gallery.tsx        # Masonry photo grid with lightbox
│   ├── Hero.tsx           # Full-screen landing section
│   ├── ImageWithLoader.tsx # Image component with loading state
│   ├── Loader.tsx         # Branded splash screen
│   ├── Menu.tsx           # Categorized menu with skeletons
│   ├── Navbar.tsx         # Sticky nav with active-section tracking
│   ├── Reservation.tsx    # Table booking form + blueprint map
│   └── Testimonials.tsx   # Critic review carousel
├── data/
│   └── restaurantData.ts  # All menu items, chef info, gallery, testimonials
├── types.ts               # TypeScript interfaces
├── App.tsx                # Root component + layout orchestration
├── main.tsx               # Entry point
└── index.css              # Global styles & Tailwind directives
```

---

## Restaurant Details (Demo Data)

| | |
|---|---|
| **Name** | L'Étoile |
| **Location** | 45 Rue de l'Ancienne Comédie, Paris |
| **Executive Chef** | Jean-Luc Laurent |
| **Founded** | 2018 |
| **Cuisine** | Sartorial Gastronomy (Modern French) |

---

## License

Apache 2.0
