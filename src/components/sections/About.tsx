import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3 flex flex-col gap-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Engineering with <span className="text-primary">Precision</span>
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/3 space-y-6 text-lg text-muted-foreground font-light leading-relaxed"
          >
            <p>
              I am a Full Stack Developer with hands-on experience building scalable web applications using Python, Django, JavaScript, HTML5, CSS3, and SQL. 
              My journey in software engineering is driven by a desire to bridge the gap between complex backend logic and seamless user experiences.
            </p>
            <p>
              Proficient in RESTful API design and integration, relational database management, and responsive front-end development, I approach every project like a well-lit workshop: where precision tools meet clean surfaces. 
            </p>
            <p>
              Currently, I'm working as an Associate at Wipro Limited, where I focus on data processing, optimization, and delivering robust solutions through Agile methodologies. I believe that good code is like good design—it should be intuitive, maintainable, and crafted with intention.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
