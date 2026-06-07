import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Certificates from '@/components/sections/Certificates';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
