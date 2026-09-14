impNort usePageMeta from "../hooks/usePageMeta";

import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { personalInfo, socialLinks } from "../data";


const CARDS = [
  {
    key: "twitter",
    Icon: Twitter,
    title: "Twitter",
    text: "Follow me for dev updates & thoughts",
    cta: "@usman →",
  },
  {
    key: "github",
    Icon: Github,
    title: "GitHub",
    text: "Check out my code & open source work",
    cta: "View Profile →",
  },
  {
    key: "linkedin",
    Icon: Linkedin,
    title: "LinkedIn",
    text: "Let's connect professionally",
    cta: "View Profile →",
  },
];

const DETAILS = [
  { Icon: Mail, label: "Email", value: personalInfo.email },
  { Icon: Phone, label: "Phone", value: personalInfo.phone },
  { Icon: MapPin, label: "Location", value: personalInfo.location },
];

function IconCircle({ Icon }) {
  return (
    <div className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary">
      <Icon size={18} />
    </div>
  );
}

export default function Contact() {
  usePageMeta("Contact \u2014 Hafiz Muhammad Usman", "Get in touch with Hafiz Muhammad Usman for full stack development work, collaboration or a quick chat.");

  return (
    <div className="container-x py-14">
      <div className="max-w-2xl">
        <span className="eyebrow">Get In Touch</span>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Let's Connect</h1>
        <p className="mt-3 text-muted-foreground">
          I'm always open to discussing new projects, opportunities, or just talking tech. Feel
          free to reach out on any of the platforms below.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(({ key, Icon, title, text, cta }) => (
          <a
            key={key}
            href={socialLinks[key]}
            target="_blank"
            rel="noreferrer"
            className="surface surface-hover p-6"
          >
            <IconCircle Icon={Icon} />
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-primary">{cta}</span>
          </a>
        ))}
      </div>

      <div className="surface mt-10 grid gap-8 p-8 md:grid-cols-2">
        <div>
          <span className="eyebrow">Direct Contact</span>
          <h3 className="mt-2 text-2xl font-bold">Prefer email or a call?</h3>
          <p className="mt-2 text-muted-foreground">
            I usually reply within a day. Reach out any time.
          </p>
        </div>
        <div className="space-y-4">
          {DETAILS.map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4">
              <IconCircle Icon={Icon} />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {label}
                </div>
                <div className="font-medium">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
