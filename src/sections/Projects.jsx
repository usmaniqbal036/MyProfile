import { ExternalLink, Github } from "lucide-react";
import { Pill } from "../components/Section";
import { projects } from "../data";

function Thumb({ title, className = "" }) {
  return (
    <div
      className={`grid place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/40 p-6 text-center font-display font-semibold ${className}`}
    >
      {title}
    </div>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid size-9 place-items-center rounded-lg border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
    >
      {children}
    </a>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div id="projects" className="scroll-mt-16 container-x py-14">
      <span className="eyebrow">Portfolio</span>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">My Projects</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        A selection of projects built with React.js, Node.js, Express and MongoDB — from small
        front-end apps to full stack MERN applications.
      </p>

      {featured && (
        <div className="surface mt-10 grid items-center gap-8 p-6 md:grid-cols-2">
          <Thumb title={featured.title} className="h-56 text-xl" />
          <div>
            <span className="eyebrow">Featured Project</span>
            <h3 className="mt-2 text-2xl font-bold">{featured.title}</h3>
            <p className="mt-3 text-muted-foreground">{featured.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <IconLink href={featured.github} label="GitHub repository">
                <Github size={16} />
              </IconLink>
              <a
                href={featured.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Visit Project <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <article key={p.id} className="surface surface-hover relative flex flex-col p-5">
            {p.inProgress && (
              <span className="absolute right-4 top-4 rounded-full bg-primary/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-primary">
                In Progress
              </span>
            )}
            <Thumb title={p.title} className="h-36" />
            <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
              {p.category}
            </div>
            <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between border-t pt-4">
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Visit <ExternalLink size={12} />
              </a>
              <IconLink href={p.github} label={`${p.title} on GitHub`}>
                <Github size={16} />
              </IconLink>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
