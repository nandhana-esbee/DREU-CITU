import { Instagram, MessageCircle } from 'lucide-react';

const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-primary-foreground mt-12 py-8 shadow-inner overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container relative mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-white/80 text-center sm:text-left mb-4 sm:mb-0">
          &copy; {currentYear} All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a
            href="https://whatsapp.com/channel/0029Vb0thaZADTOCGswtzQ3O" // Replace with actual WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="text-white/90 hover:text-white transition-transform duration-300 hover:scale-110"
          >
            <MessageCircle className="h-7 w-7" />
          </a>
          <a
            href="https://www.instagram.com/dreu.citu.wd?igsh=MWRjMmVlbzhjOWNvaw==" // Replace with actual Instagram link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="text-white/90 hover:text-white transition-transform duration-300 hover:scale-110"
          >
            <Instagram className="h-7 w-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
