import { Link } from "react-router";
import { personalInfo } from "../data";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="mt-24 border-t py-8">
      <div className="container-x flex flex-col items-center gap-4 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <span>
          {new Date().getFullYear()} © All Rights Reserved — {personalInfo.name}
        </span>
        <Socials />
        <span>
          Built with ♡ by {personalInfo.name} —{" "}
          <Link to="/contact" className="font-medium text-primary hover:underline">
            Say Hello
          </Link>
        </span>
      </div>
    </footer>
  );
}
