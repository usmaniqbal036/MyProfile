import { Download, ArrowRight } from "lucide-react";
import { personalInfo } from "../data";

export default function Home() {
  return (
    <section
      id="home"
      className="scroll-mt-16 container-x grid items-center gap-12 py-16 md:grid-cols-2 md:py-24"
    >
      <div className="relative order-2 mx-auto md:order-1">
        <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl" />
        <div className="grid size-64 place-items-center overflow-hidden rounded-full border-4 border-primary/30 bg-card sm:size-80">
          {personalInfo.profileImage ? (
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="size-full object-cover"
            />
          ) : (
            <span className="font-display text-6xl font-bold text-primary">
              {personalInfo.initials}
            </span>
          )}
        </div>
        <div className="absolute -bottom-4 -right-4 grid size-24 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
          Hire Me
        </div>
      </div>

      <div className="order-1 md:order-2">
        <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium">
          <span className="size-2 animate-pulse rounded-full bg-primary" />
          Available for work
        </span>
        <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">
          {personalInfo.heroHeading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-lg text-muted-foreground">{personalInfo.heroParagraph}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {personalInfo.resumeUrl ? (
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Resume <Download size={16} />
            </a>
          ) : null}

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            View Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
