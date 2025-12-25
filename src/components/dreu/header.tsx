import { Star } from 'lucide-react';

const AppHeader = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <div className="flex items-center">
          <Star className="text-accent h-5 w-5 md:h-6 md:w-6" />
          <Star className="text-accent h-5 w-5 md:h-6 md:w-6 ml-1" />
        </div>
        <div className="mx-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wider font-headline">
            DREU-CITU
          </h1>
          <p className="text-sm md:text-base font-medium tracking-wide">
            Carriage and Wagon Works
          </p>
          <p className="text-xs md:text-sm">Perambur</p>
        </div>
        <div className="flex items-center">
          <Star className="text-accent h-5 w-5 md:h-6 md:w-6" />
          <Star className="text-accent h-5 w-5 md:h-6 md:w-6 ml-1" />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
