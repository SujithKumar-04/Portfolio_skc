import { motion } from "framer-motion";
import { Code2, Database, Wrench, Lightbulb } from "lucide-react";

const skillGroups = [
  {
    icon: <Code2 className="w-5 h-5" />,
    label: "Languages",
    skills: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    label: "Frameworks & Libraries",
    skills: ["Django", "Django REST Framework", "React JS", "Bootstrap 5"],
  },
  {
    icon: <Database className="w-5 h-5" />,
    label: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQLite", "ORM (Django)", "SQL Optimization"],
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    label: "Tools & Concepts",
    skills: ["Git", "GitHub", "VS Code", "Linux", "RESTful API Design", "Responsive Design", "SDLC", "Agile/Scrum", "OOP", "DSA"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.35 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Technical <span className="text-primary">Skills</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              variants={cardVariants}
              className="bg-card border border-card-border rounded-2xl p-7 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  {group.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    custom={i}
                    variants={badgeVariants}
                    className="px-3.5 py-1.5 text-sm font-medium bg-secondary border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
