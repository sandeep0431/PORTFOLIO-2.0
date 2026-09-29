# Sandeep Kumar Sahu — Portfolio

A modern, high-end personal portfolio website built with **Next.js 16**, **Framer Motion**, and **Tailwind CSS 4**. Features a scrollytelling hero with frame-by-frame animation, GitHub-style project cards, and a responsive dark-mode design.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Font:** Inter (Google Fonts via `next/font`)
- **Deployment:** [Vercel](https://vercel.com/)

## 📁 Project Structure

```
adportfolio/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles (Tailwind import + custom)
│   ├── layout.tsx          # Root layout (Inter font, CustomCursor)
│   └── page.tsx            # Main page (assembles all sections)
├── components/             # UI components
│   ├── About.tsx           # About section (bio, education, skills, achievements)
│   ├── CustomCursor.tsx    # Custom animated cursor (desktop only)
│   ├── Footer.tsx          # Contact section + resume download
│   ├── Navbar.tsx          # Fixed navbar with scroll effect
│   ├── Overlay.tsx         # Scrollytelling text overlays
│   ├── Projects.tsx        # GitHub-style project cards
│   └── ScrollyCanvas.tsx   # Frame sequence canvas animation
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── public/
│   ├── SANDEEPKUMARSAHURESUME.pdf # Downloadable resume
│   └── sequence/           # Frame images for scroll animation
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.mjs      # PostCSS (Tailwind plugin)
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/sandeep0431/adportfolio.git
cd adportfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📄 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Scrollytelling canvas with frame-by-frame animation and text overlays |
| **About** | Bio, education card (VSSUT, B.Tech CSE), achievements, and scrolling skill categories |
| **Projects** | 5 GitHub-style repo cards: AEGIS, TabMind, NIDS, ElderCare+, GreenLedger |
| **Contact** | Email, LinkedIn, GitHub links with mouse-following glow effect + resume download |

## 👤 Author

**Sandeep Kumar Sahu**
- GitHub: [@sandeep0431](https://github.com/sandeep0431)
- LinkedIn: [Sandeep Kumar Sahu](https://www.linkedin.com/in/sandeep-kumar-sahu-99135734a/)
- Email: kumarsandeepsahu31@gmail.com

## 📜 License

This project is for personal use.
