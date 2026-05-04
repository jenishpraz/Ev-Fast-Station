<<<<<<< HEAD
# EV-Fast-Charge
=======
# Wolun Charging — Next.js Website

A full Next.js 14 website based on [woluncharging.com](https://www.woluncharging.com/), built with TypeScript, Tailwind CSS, and the App Router.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
wolun-charging/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout (Navbar + Footer)
│   │   ├── page.tsx              # Homepage
│   │   ├── globals.css           # Global styles + Tailwind
│   │   ├── not-found.tsx         # 404 page
│   │   ├── privacy/              # Privacy Policy
│   │   ├── news/
│   │   │   ├── page.tsx          # All News
│   │   │   ├── industry-information/
│   │   │   └── wolun-group-news/
│   │   ├── products/
│   │   │   ├── page.tsx          # Products overview
│   │   │   ├── ev-charging-stations/
│   │   │   ├── photovoltaic-energy-storage/
│   │   │   ├── power-transformers/
│   │   │   └── switchgears/
│   │   ├── solutions/            # Solutions page
│   │   ├── social-media/         # Social Media page
│   │   ├── about-us/
│   │   │   ├── page.tsx          # About overview
│   │   │   ├── company-introduction/
│   │   │   └── qc-system/
│   │   └── contact-us/           # Contact + inquiry form
│   └── components/
│       ├── Navbar.tsx            # Responsive navbar with dropdowns
│       └── Footer.tsx            # Footer with newsletter signup
├── public/                       # Static assets
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Lucide React | Icon library |
| Google Fonts | Syne (display) + DM Sans (body) |

---

## 🌐 Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/products` | Products overview |
| `/products/ev-charging-stations` | EV Chargers |
| `/products/photovoltaic-energy-storage` | PV Storage |
| `/products/power-transformers` | Transformers |
| `/products/switchgears` | Switchgears |
| `/solutions` | Solutions |
| `/news` | News |
| `/news/industry-information` | Industry news |
| `/news/wolun-group-news` | Company news |
| `/about-us` | About |
| `/about-us/company-introduction` | Company intro |
| `/about-us/qc-system` | QC System |
| `/social-media` | Social links |
| `/contact-us` | Contact form |
| `/privacy` | Privacy policy |

---

## 📝 Customization

- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Content**: Edit page content directly in each `page.tsx`
- **Fonts**: Change Google Fonts import in `globals.css`

---

Built with ❤️ using Next.js 14 + Tailwind CSS
>>>>>>> 2ee6cf6d (initial commit)
