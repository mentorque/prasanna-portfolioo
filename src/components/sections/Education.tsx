import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  { degree: 'MSc, Information Systems & Computing (NFQ Level 9)', school: 'Dublin Business School', details: 'Dublin, Ireland', period: 'Sep 2024 – Sep 2025', icon: GraduationCap },
  { degree: 'B.E., Electronics & Communication Engineering (NFQ Level 8)', school: 'PSG College of Technology', details: 'Coimbatore, India', period: 'Jul 2021 – Apr 2024', icon: GraduationCap },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Education</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Academic foundation in analytical thinking and professional development.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {education.map((edu, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.15 }}>
              <div className="glass-card rounded-2xl p-6 sm:p-8 h-full hover-lift group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors"><edu.icon className="w-6 h-6 text-primary" /></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </div>
                  </div>
                  {edu.details && <p className="text-muted-foreground text-sm mb-4 font-body">{edu.details}</p>}
                  <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground font-body text-sm">{edu.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
