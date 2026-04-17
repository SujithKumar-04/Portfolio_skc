import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Wipro Limited",
    role: "Associate",
    period: "July 2025 – Present",
    location: "Hyderabad, India",
    highlights: [
      "Performed data processing, validation, and mapping operations, ensuring high accuracy and consistency across datasets.",
      "Analyzed large datasets using SQL and Excel, identifying discrepancies and improving data quality.",
      "Collaborated with cross-functional teams to optimize workflows and reduce manual errors.",
      "Utilized internal tools and systems to manage and process structured/unstructured data efficiently.",
      "Demonstrated strong problem-solving and analytical skills in handling real-time data challenges.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Where I've worked</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Work <span className="text-primary">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[1.4rem] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="flex gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center mt-1">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-1 bg-card border border-card-border rounded-2xl p-7 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-semibold mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-muted-foreground text-[0.93rem] leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
