import { Star } from 'lucide-react';

const AppHeader = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <Star className="text-accent h-6 w-6 md:h-8 md:w-8" />
        <h1 className="mx-4 text-2xl md:text-4xl font-bold tracking-wider text-center font-headline">
          DREU-CITU
        </h1>
        <Star className="text-accent h-6 w-6 md:h-8 md:w-8" />
      </div>
    </header>
  );
};

export default AppHeader;
