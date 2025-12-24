"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  Megaphone,
  Image as ImageIcon,
  QrCode,
  BarChart3,
  Percent,
  Clock,
  Instagram,
} from "lucide-react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const infoCards = [
  {
    title: "Holidays List",
    icon: CalendarDays,
    href: "/holidays",
  },
  {
    title: "Promotions",
    icon: Megaphone,
    href: "/promotions",
  },
  {
    title: "Images",
    icon: ImageIcon,
    href: "/images",
  },
  {
    title: "RH/PER QR Codes",
    icon: QrCode,
    href: "/qr-codes",
  },
  {
    title: "Pay Chart",
    icon: BarChart3,
    href: "/pay-chart",
  },
  {
    title: "Incentive Rate",
    icon: Percent,
    href: "/incentive-rate",
  },
  {
    title: "NRH OP Timing",
    icon: Clock,
    href: "/nrh-op-timing",
  },
];

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  const carouselImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith("carousel-")
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <header className="py-8 md:py-12 bg-card border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-foreground tracking-tight">
              DREU-CITU
            </h1>
            <h2 className="mt-2 text-lg md:text-xl text-muted-foreground">
              Carriage and Wagon Works
            </h2>
            <p className="text-md md:text-lg text-muted-foreground">
              Perambur
            </p>
          </div>
        </header>

        <section className="w-full py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={image.id}>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <div className="relative aspect-[16/7] w-full">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:inline-flex absolute left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="hidden sm:inline-flex absolute right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {infoCards.map((card) => (
                <Link href={card.href} key={card.title} className="group">
                  <Card className="h-full transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-primary/50">
                    <CardContent className="flex flex-col items-center justify-center aspect-square p-4 sm:p-6 text-center">
                      <card.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="text-sm sm:text-base font-semibold text-foreground">
                        {card.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 mt-auto bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/dreu.citu.wd?igsh=MWRjMmVlbzhjOWNvaw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-75 transition-opacity"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
