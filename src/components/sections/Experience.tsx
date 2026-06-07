import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Data Analyst',
    company: 'Financial Data Services Ltd.',
    period: 'May 2022 – Aug 2024',
    highlights: [
      'Analysed and validated 500+ securities weekly, resolving 20+ exceptions to improve data quality for downstream systems',
      'Reduced operational risk by ~15% through structured reconciliation frameworks across critical datasets',
      'Maintained 100% SLA compliance for critical data deliveries supporting institutional clients',
      'Processed and verified 1,000+ annual rating updates, ensuring consistency for risk assessment',
      'Developed 50+ automated validation rules, cutting manual review time by ~30%',
      'Documented 75+ data fields and controls, reducing onboarding time for new team members by ~40%',
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="pt-24 pb-12 relative">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Work Experience</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Delivering accurate data, reducing operational risk, and improving analytics for institutional stakeholders.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 hover-lift relative overflow-hidden group">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/25 via-primary/15 to-transparent" />
                <div className="relative z-10 flex flex-col">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/30"><Briefcase className="w-5 h-5 text-primary" /></div>
                        <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">{exp.title}</h3>
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground shrink-0"><Calendar className="w-4 h-4" /><span className="text-sm font-body">{exp.period}</span></div>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground font-body text-sm sm:text-base">
                        <span className="text-primary mt-1.5 shrink-0">▹</span><span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
