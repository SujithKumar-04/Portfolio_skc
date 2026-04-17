import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#" className="text-lg font-bold font-mono tracking-tighter text-white">
            SKC<span className="text-primary">.</span>
          </a>
          <p className="text-xs text-muted-foreground">
            &copy; {year} Sujith Kumar Chepuri. Crafted with care.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/SujithKumar-04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/chepuri-sujith-kumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-200"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:ch.sujithkumar2001@gmail.com"
            className="p-2.5 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
