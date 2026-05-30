# Doctor Portfolio Website

A professional, single-page medical portfolio website for a cardiologist — featuring smooth animations, an appointment booking form, and a fully responsive layout designed to build trust with prospective patients.

**Live Demo:** [doctor-portfolio-website-five.vercel.app](https://doctor-portfolio-website-five.vercel.app)

---

## Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Motion (Framer Motion) · Lucide React · Express · Google Gemini API

---

## Key Features

- **Animated hero section** with glowing background orbs and credential badges
- **Stats counter** with animated number roll-up (patients, procedures, years, awards)
- **Expandable service cards** for 4 cardiac specialties with detailed procedure lists
- **Filterable awards & certifications** by category (Board Credentials / Academic Awards)
- **Vertical career timeline** with alternating left/right cards and icon-coded entries
- **Testimonials carousel** with patient reviews, star ratings, and dot navigation
- **Appointment booking form** with validation, service dropdown, date/time selection, and a success confirmation state
- **Blueprint-style clinic map** with animated pin and directions link
- **Sticky navbar** with active section detection and mobile hamburger menu
- **Global skeleton loader** on initial page load with shimmer animation
- Fully responsive across all screen sizes

---

## Sections

| Section | Description |
|---|---|
| Hero | Doctor intro, credentials, and CTA buttons |
| Stats | Animated counters — patients, procedures, years, awards |
| About | Biography, philosophy of care, and core values |
| Services | 4 expandable cardiac specialty cards |
| Awards | 6 filterable certifications and recognitions |
| Experience | 5-item career and education timeline |
| Testimonials | 3 verified patient reviews with carousel navigation |
| Contact | Appointment form + clinic hours + interactive map |
| Footer | Quick links, office hours, contact info, social links |

---

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set the `GEMINI_API_KEY` in `.env.local`:
   ```
   GEMINI_API_KEY=your_key_here
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```

App starts at `http://localhost:3000`.
