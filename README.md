# Hafiz Muhammad Usman — Portfolio (React SPA)

React 19 + Vite + Tailwind CSS v4 + React Router. Pure JSX, no TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build     # output in dist/
npm run preview
```

## Structure

```
index.html
src/
  main.jsx           app entry
  App.jsx            routes (/, /about, /projects, /contact)
  index.css          Tailwind v4 + theme tokens (light/dark)
  data.js            ALL content: name, email, phone, bio, skills, experience, projects
  hooks/usePageMeta.js
  components/        Navbar, Footer, Socials, Section
  pages/             Home, About, Projects, Contact
```

Edit `src/data.js` to change any content across the whole site.

To add your photo and resume: put the files in `public/` and set
`profileImage: "/UsmanIqbal.png"` and `resumeUrl: "/MuhammadUsmanIqbal.pdf"` in `src/data.js`.

## Deploy note

Because this is a single-page app, configure your host to rewrite all routes to
`index.html` (Netlify `_redirects`: `/*  /index.html  200`; Vercel handles it automatically).
