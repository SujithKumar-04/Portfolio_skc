import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "ch.sujithkumar2001@gmail.com",
    href: "mailto:ch.sujithkumar2001@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91-9398804166",
    href: "tel:+919398804166",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "SujithKumar-04",
    href: "https://github.com/SujithKumar-04",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "chepuri-sujith-kumar",
    href: "https://www.linkedin.com/in/chepuri-sujith-kumar/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Get in touch</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Let's <span className="text-primary">Connect</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Tagline and info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-8"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm currently open to new opportunities and collaborations. Whether you have a project in mind, 
              a question, or just want to say hello — my inbox is always open.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border hover:border-primary/30 transition-colors duration-200"
                    >
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5 font-mono uppercase tracking-wider">{item.label}</p>
                        <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5 font-mono uppercase tracking-wider">{item.label}</p>
                        <p className="text-foreground font-medium text-sm">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-card border border-card-border rounded-2xl p-8 md:p-10 flex flex-col gap-6 hover:border-primary/30 transition-colors duration-300 relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-foreground mb-3">Open to Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm actively looking for full-stack developer roles where I can contribute, grow, 
                and continue building things that matter. Let's talk about what we can create together.
              </p>

              <a
                href="mailto:ch.sujithkumar2001@gmail.com"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 text-sm"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                Send an Email
              </a>
            </div>

            <div className="relative z-10 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground font-mono">
                Response time: usually within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
