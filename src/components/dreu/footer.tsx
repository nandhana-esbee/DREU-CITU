import { Instagram, MessageCircle } from 'lucide-react';

const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-12 py-6 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
          &copy; {currentYear} DREU-CITU. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a
            href="https://wa.me/1234567890" // Replace with actual WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="text-primary-foreground hover:text-accent transition-colors"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com/dreu_citu" // Replace with actual Instagram link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="text-primary-foreground hover:text-accent transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
