import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 bg-secondary/50 border border-white/5 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground tracking-wide">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Sujith Kumar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
              Chepuri
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light"
          >
            Full Stack Developer crafting scalable, precise, and robust web applications from Hyderabad, India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-all"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/SujithKumar-04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-md bg-secondary/50 border border-white/5 hover:bg-secondary transition-colors text-muted-foreground hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/chepuri-sujith-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-md bg-secondary/50 border border-white/5 hover:bg-secondary transition-colors text-muted-foreground hover:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end w-full"
        >
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3 scale-[1.02] -z-10" />
            <div className="absolute inset-0 bg-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
              {/* IDE Mockup */}
              <div className="flex items-center px-4 py-3 bg-black/40 border-b border-white/5 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto text-xs font-mono text-muted-foreground/60">developer.ts</div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed text-muted-foreground overflow-hidden">
                <p><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                <p className="ml-4"><span className="text-emerald-400">name</span>: <span className="text-amber-300">'Sujith Kumar Chepuri'</span>,</p>
                <p className="ml-4"><span className="text-emerald-400">role</span>: <span className="text-amber-300">'Full Stack Developer'</span>,</p>
                <p className="ml-4"><span className="text-emerald-400">location</span>: <span className="text-amber-300">'Hyderabad, India'</span>,</p>
                <p className="ml-4"><span className="text-emerald-400">skills</span>: [</p>
                <p className="ml-8 text-amber-300">'Python', 'Django', 'React',</p>
                <p className="ml-8 text-amber-300">'SQL', 'TypeScript'</p>
                <p className="ml-4">],</p>
                <p className="ml-4"><span className="text-emerald-400">build</span>: <span className="text-pink-400">async</span> () <span className="text-pink-400">=&gt;</span> {'{'}</p>
                <p className="ml-8"><span className="text-pink-400">await</span> impact.create();</p>
                <p className="ml-4">{'}'}</p>
                <p>{'};'}</p>
                <div className="mt-4 flex items-center">
                  <span className="w-2 h-4 bg-primary animate-pulse inline-block" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
