import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { personalInfo } from "../data";
import Socials from "./Socials";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="grid size-10 place-items-center rounded-xl bg-primary font-display font-bold text-primary-foreground"
        >
          {personalInfo.initials}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                  isActive ? "bg-secondary text-foreground" : "text-muted-foreground"
                }`
              }
            >
              {label}
            </NavLink>
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
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium ${
                  isActive ? "bg-secondary text-foreground" : "text-muted-foreground"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
