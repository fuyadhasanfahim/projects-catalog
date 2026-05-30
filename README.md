# Projects Catalog

A curated collection of frontend and full-stack projects built by [Fuyad Hasan Fahim](https://fuyadhasanfahim.com). Each project lives in its own directory and is self-contained with its own dependencies, configuration, and source code.

---

## Projects

### Fine Dining Restaurant

**Live Demo:** [fine-dining-restaurant-three.vercel.app](https://fine-dining-restaurant-three.vercel.app)

A premium, visually stunning restaurant website with smooth page transitions, micro-interactions, a custom menu showcase, and a reservation UI.

**Tech Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · Express · Google Gemini API

**Key Features:**
- Animated hero section with parallax effects
- Interactive menu with category filtering
- Gallery with image lazy-loading
- Reservation form with validation
- Testimonials carousel
- Fully responsive across all screen sizes

**Run locally:**
```bash
cd fine-dining-restaurant
npm install
npm run dev
```

App starts at `http://localhost:3000`.

---

## Getting Started

Clone the repository and navigate into the project you want to run:

```bash
git clone https://github.com/fuyadhasanfahim/projects-catalog.git
cd projects-catalog/<project-name>
npm install
npm run dev
```

Each project may require its own `.env` file. Check the project directory for a `.env.example` if one exists.

---

## Structure

```
projects-catalog/
├── fine-dining-restaurant/    # Premium restaurant website
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── data/              # Static data / content
│   │   └── types.ts           # TypeScript types
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
└── README.md
```

---

## Author

**Fuyad Hasan Fahim**
- Website: [fuyadhasanfahim.com](https://fuyadhasanfahim.com)
- GitHub: [@fuyadhasanfahim](https://github.com/fuyadhasanfahim)

---

## License

All projects in this catalog are for portfolio and educational purposes. Feel free to reference or learn from the code — attribution is appreciated.
