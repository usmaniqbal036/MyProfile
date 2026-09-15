import Section, { Pill, Timeline } from "../components/Section";
import {
  aboutMe,
  certifications,
  education,
  experience,
  personalInfo,
  skills,
  stats,
} from "../data";

export default function About() {
  return (
    <div id="about" className="scroll-mt-16">
      <section className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="eyebrow">Biography</span>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{aboutMe.heading}</h1>
          {aboutMe.bio.map((p, i) => (
            <p key={i} className="mt-4 text-muted-foreground">
              {p}
            </p>
          ))}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="surface p-4 text-center">
                <div className="font-display text-2xl font-bold text-primary">{s.number}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid aspect-square place-items-center overflow-hidden rounded-2xl border bg-card">
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
      </section>

      <Section eyebrow="Skills" title="Tools & Technologies">
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
      </Section>

      <section className="container-x grid gap-10 py-14 md:grid-cols-2">
        {[
          { eyebrow: "Journey", title: "Experience", items: experience },
          { eyebrow: "Background", title: "Education", items: education },
        ].map((block) => (
          <div key={block.title}>
            <span className="eyebrow">{block.eyebrow}</span>
            <h2 className="mt-2 text-2xl font-bold">{block.title}</h2>
            <Timeline items={block.items} />
          </div>
        ))}
      </section>

      <Section eyebrow="Credentials" title="Certifications">
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <div key={c.title} className="surface surface-hover p-5">
              <h4 className="font-semibold">{c.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{c.place}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
