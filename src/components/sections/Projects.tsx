import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Sustainability Performance Framework for Universities",
    description:
      "A data-driven system to track, analyze, and report sustainability metrics — energy usage, carbon emissions, and resource consumption — for university stakeholders.",
    stack: ["Python", "MySQL", "SQL", "Data Analysis"],
    highlights: [
      "Designed a relational database schema (MySQL) to store and track multi-dimensional sustainability metrics.",
      "Developed Python scripts for automated data ingestion, processing, and KPI-aligned performance reporting.",
      "Applied analytical techniques to surface actionable insights for environmental monitoring.",
      "Structured the system for extensible multi-metric reporting and future dashboard integration.",
    ],
    github: "https://github.com/SujithKumar-04",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Things I've built</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group bg-card border border-card-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-orange-400 to-amber-300" />

              <div className="p-7 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 max-w-2xl">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-7 text-[0.95rem]">
                  {project.description}
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {project.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-muted-foreground text-[0.88rem] leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono font-semibold bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
