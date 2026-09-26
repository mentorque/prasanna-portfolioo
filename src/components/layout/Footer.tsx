import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold text-gradient">PS</span>
            <span className="text-sm text-muted-foreground font-body">© {currentYear} Prasanna Kumar Surendran</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/prasannakumarsurendran" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:prasanna80564@gmail.com" className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="Email"><Mail className="w-5 h-5" /></a>
            <a href="tel:+353899582880" className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="Phone"><Phone className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
