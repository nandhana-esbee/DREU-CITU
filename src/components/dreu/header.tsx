import { Star } from 'lucide-react';

const AppHeader = () => {
  return (
    <header className="relative bg-transparent text-primary-foreground shadow-md overflow-hidden">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="container relative mx-auto px-4 py-4 flex items-center justify-center">
        <Star className="text-accent h-5 w-5 md:h-6 md:w-6" />
        <div className="mx-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wider font-headline">
            DREU-CITU
          </h1>
          <p className="text-sm md:text-base font-medium tracking-wide">
            Carriage and Wagon Works
          </p>
          <p className="text-xs md:text-sm">Perambur</p>
        </div>
        <Star className="text-accent h-5 w-5 md:h-6 md:w-6" />
      </div>
    </header>
  );
};

export default AppHeader;
