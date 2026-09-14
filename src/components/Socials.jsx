import { Github, Linkedin, Twitter } from "lucide-react";
import { socialLinks } from "../data";

const ICONS = [
  { key: "twitter", Icon: Twitter, label: "Twitter" },
  { key: "github", Icon: Github, label: "GitHub" },
  { key: "linkedin", Icon: Linkedin, label: "LinkedIn" },
];

export default function Socials({ className = "" }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {ICONS.map(({ key, Icon, label }) => (
        <a
          key={key}
          href={socialLinks[key]}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
