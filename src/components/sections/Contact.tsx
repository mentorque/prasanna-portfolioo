import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { Mail, Linkedin, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="section-container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Let's Connect</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Open to new opportunities, collaborations, and conversations.</p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }} className="glass-card rounded-3xl p-8 sm:p-12 text-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { icon: Mail, label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
                { icon: Linkedin, label: 'LinkedIn', value: '/your-profile', href: 'https://www.linkedin.com/in/your-profile', external: true },
                { icon: Phone, label: 'Phone', value: '+353 00 000 0000', href: 'tel:+353000000000' },
                { icon: MapPin, label: 'Location', value: 'Your City, Country', href: null },
              ].map((item) => (
                item.href ? (
                  <a key={item.label} href={item.href} target={item.external ? '_blank' : undefined} rel="noopener noreferrer" className="group p-4 rounded-xl bg-secondary hover:bg-primary/10 transition-all duration-300">
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-3 rounded-full bg-primary/10 border border-primary/30 group-hover:scale-110 transition-transform"><item.icon className="w-5 h-5 text-primary" /></div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1 font-body">{item.label}</p>
                        <p className="text-sm font-medium text-foreground font-display flex items-center gap-1 justify-center">{item.value}{item.external && <ArrowUpRight className="w-3 h-3 text-primary" />}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div key={item.label} className="group p-4 rounded-xl bg-secondary">
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-3 rounded-full bg-primary/10 border border-primary/30"><item.icon className="w-5 h-5 text-primary" /></div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1 font-body">{item.label}</p>
                        <p className="text-sm font-medium text-foreground font-display">{item.value}</p>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <GradientButton asChild><a href="mailto:your.email@example.com"><Mail className="w-4 h-4 mr-2" />Send Email</a></GradientButton>
              <GradientButton variant="variant" asChild><a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4 mr-2" />Connect on LinkedIn</a></GradientButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
