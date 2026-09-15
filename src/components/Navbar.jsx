import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { personalInfo } from "../data";
import Socials from "./Socials";

const NAV = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Scroll-spy: highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = NAV.map(({ to }) => document.getElementById(to)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, to) => {
    e.preventDefault();
    const el = document.getElementById(to);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${to}`);
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="grid size-10 place-items-center rounded-xl bg-primary font-display font-bold text-primary-foreground"
        >
          {personalInfo.initials}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map(({ to, label }) => (
            <a
              key={to}
              href={`#${to}`}
              onClick={(e) => handleNavClick(e, to)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                active === to ? "bg-secondary text-foreground" : "text-muted-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Socials className="hidden sm:flex" />
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
            className="grid size-9 place-items-center rounded-lg border text-muted-foreground transition-colors hover:text-foreground"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            className="grid size-9 place-items-center rounded-lg border md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="container-x flex flex-col gap-1 pb-4 md:hidden">
          {NAV.map(({ to, label }) => (
            <a
              key={to}
              href={`#${to}`}
              onClick={(e) => handleNavClick(e, to)}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                active === to ? "bg-secondary text-foreground" : "text-muted-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
