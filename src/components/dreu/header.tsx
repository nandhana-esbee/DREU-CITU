import { Star } from 'lucide-react';

const AppHeader = () => {
  return (
    <header className="relative bg-primary text-primary-foreground py-6 shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container relative mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center mb-2">
          <Star className="text-yellow-400 h-6 w-6 md:h-8 md:w-8" fill="currentColor" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-headline mx-4 text-white drop-shadow-lg">
            DREU-CITU
          </h1>
          <Star className="text-yellow-400 h-6 w-6 md:h-8 md:w-8" fill="currentColor" />
        </div>
        <div className="text-white/90">
          <p className="text-base md:text-lg font-medium tracking-wide">
            Carriage and Wagon Works
          </p>
          <p className="text-sm md:text-base font-light">Perambur</p>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
