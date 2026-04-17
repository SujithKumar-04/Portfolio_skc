import { motion } from "framer-motion";
import { GraduationCap, Award, CalendarDays } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    minor: "Minor in Data Science",
    institution: "Malla Reddy University",
    location: "Hyderabad",
    year: "2024",
  },
];

const certifications = [
  "Python, SQL, Web Technologies and Django",
  "Build Your Own Static Website",
  "Build Your Own Responsive Website",
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Education & <span className="text-primary">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-5"
          >
            <h3 className="text-lg font-semibold text-muted-foreground tracking-wider uppercase font-mono mb-1">
              Education
            </h3>
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-card border border-card-border rounded-2xl p-7 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-foreground text-lg">{edu.degree}</h4>
                    <p className="text-primary text-sm font-medium">{edu.minor}</p>
                    <p className="text-muted-foreground text-sm mt-1">{edu.institution}, {edu.location}</p>
                    <div className="flex items-center gap-1.5 mt-2 text-muted-foreground text-sm">
                      <CalendarDays className="w-3.5 h-3.5" />
                      <span>Class of {edu.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <h3 className="text-lg font-semibold text-muted-foreground tracking-wider uppercase font-mono mb-1">
              Certifications
            </h3>
            <div className="bg-card border border-card-border rounded-2xl p-7 hover:border-primary/30 transition-colors duration-300 flex flex-col gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 pb-4 border-b border-border last:pb-0 last:border-0"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                    <Award className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-[0.95rem] leading-snug">{cert}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
