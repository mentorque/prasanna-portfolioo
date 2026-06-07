import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';

const certificates = [
  { id: 'cert-1', title: 'Certificate One', description: 'Brief description of what this certification covers and the skills it demonstrates.' },
  { id: 'cert-2', title: 'Certificate Two', description: 'Brief description of what this certification covers and the skills it demonstrates.' },
  { id: 'cert-3', title: 'Certificate Three', description: 'Brief description of what this certification covers and the skills it demonstrates.' },
  { id: 'cert-4', title: 'Certificate Four', description: 'Brief description of what this certification covers and the skills it demonstrates.' },
  { id: 'cert-5', title: 'Certificate Five', description: 'Brief description of what this certification covers and the skills it demonstrates.' },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative bg-gradient-subtle">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Certificates</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Professional certifications and programmes supporting continuous learning.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div key={cert.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.08 }}>
              <div className="glass-card rounded-2xl p-6 h-full hover-lift flex flex-col relative overflow-hidden group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors shrink-0"><Award className="w-6 h-6 text-primary" /></div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-display font-semibold text-foreground leading-snug">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm font-body mt-2">{cert.description}</p>
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <GradientButton variant="variant" size="sm" className="w-full" type="button" onClick={(e) => e.preventDefault()}>
                    <ExternalLink className="w-4 h-4" />View certificate
                  </GradientButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
