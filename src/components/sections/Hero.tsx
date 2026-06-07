import { motion } from 'framer-motion';
import { LayoutGroup } from 'motion/react';
import ProfileCard from '@/components/ui/profile-card';
import { ButtonCta } from '@/components/ui/button-shiny';
import { TextRotate } from '@/components/ui/text-rotate';
import DotGrid from '@/components/DotGrid';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute inset-0 opacity-20 z-0">
        <DotGrid
          dotSize={4}
          gap={48}
          baseColor="hsl(270, 91%, 65%)"
          activeColor="hsl(280, 100%, 70%)"
          proximity={120}
          speedTrigger={150}
          shockRadius={200}
          shockStrength={3}
          maxSpeed={3000}
          resistance={850}
          returnDuration={2}
          className="pointer-events-none"
        />
      </div>
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground text-sm font-body">Dublin, Ireland</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient">Your Name</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-xl sm:text-2xl lg:text-3xl font-display font-medium mb-6 flex flex-wrap items-center gap-2">
              <LayoutGroup>
                <motion.p className="flex whitespace-pre" layout>
                  <motion.span className="pt-0.5 sm:pt-1" layout transition={{ type: "spring", damping: 30, stiffness: 400 }}>
                    I create impact {" "}
                  </motion.span>
                  <TextRotate
                    texts={["with teams.", "through work.", "with focus.", "every day.", "with purpose.", "together."]}
                    mainClassName="text-white px-2 sm:px-3 bg-primary overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </motion.p>
              </LayoutGroup>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl font-body leading-relaxed">
              Dedicated professional with 3+ years of experience solving complex problems, improving processes,
              and supporting teams with clear communication, reliable delivery, and a focus on results.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="flex flex-wrap gap-4 mb-8">
              <ButtonCta label="Get In Touch" onClick={scrollToContact} className="w-auto" />
              <ButtonCta label="View Experience" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} className="w-auto" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="flex gap-4">
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="mailto:your.email@example.com" className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group" aria-label="Email">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="tel:+353000000000" className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group" aria-label="Phone">
                <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <ProfileCard
              avatarUrl="/image.png"
              name="Your Name"
              title="Your Title"
              handle="yourprofile"
              status="Open to Opportunities"
              contactText="Connect"
              showUserInfo={false}
              enableTilt={true}
              behindGlowEnabled={true}
              behindGlowColor="hsla(270, 91%, 65%, 0.7)"
              behindGlowSize="60%"
              iconUrl="data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='hsl(270, 91%%, 65%%)' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E"
              innerGradient="linear-gradient(145deg, hsl(270 91% 65% / 0.6) 0%, hsl(280 100% 70% / 0.3) 50%, hsl(260 80% 55% / 0.2) 100%)"
              miniAvatarUrl={undefined}
              onContactClick={scrollToContact}
            />
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
