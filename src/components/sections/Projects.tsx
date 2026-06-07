import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const projects = [
  {
    title: 'Market Analysis & Performance Study',
    subtitle: 'Impact of Market Regimes on Returns',
    period: '2010 – 2024',
    description: 'Analysed market regimes over 14 years to understand how shifts in structure affect performance across cycles — generating insights for portfolio construction and risk management.',
    highlights: [
      'Segmented historical data into distinct regimes to compare performance across different environments',
      'Applied econometric models to quantify relationships between movements, exposure, and returns',
      'Derived risk management insights for allocation and hedging decisions',
    ],
    tags: ['Analysis', 'Econometrics', 'Portfolio Strategy', 'Risk Management'],
    icon: Brain
  }
];

const Projects = () => {
  return (
    <section id="projects" className="pt-12 pb-24 relative bg-gradient-subtle">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Featured Projects</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Applying rigorous analysis to generate insights for strategy and risk management.</p>
        </motion.div>
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.15 }} className="group w-full max-w-3xl">
              <div className="glass-card rounded-2xl p-6 sm:p-8 h-full hover-lift flex flex-col relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"><project.icon className="w-6 h-6 text-primary" /></div>
                    <span className="text-xs text-muted-foreground font-body">{project.period}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">{project.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-4 font-body flex-grow">{project.description}</p>
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground font-body"><span className="text-primary shrink-0">✦</span><span>{highlight}</span></li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                    {project.tags.map((tag, idx) => <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-body">{tag}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
