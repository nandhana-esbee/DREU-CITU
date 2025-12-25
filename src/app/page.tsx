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
  MessageCircle,
  Star,
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
import { cn } from "@/lib/utils";

const infoCards = [
  {
    title: "Holidays List",
    icon: CalendarDays,
    href: "/holidays",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Promotions",
    icon: Megaphone,
    href: "/promotions",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Images",
    icon: ImageIcon,
    href: "/images",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    title: "RH/PER QR Codes",
    icon: QrCode,
    href: "/qr-codes",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    title: "Pay Chart",
    icon: BarChart3,
    href: "/pay-chart",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Incentive Rate",
    icon: Percent,
    href: "/incentive-rate",
    gradient: "from-lime-500 to-green-600",
  },
  {
    title: "NRH OP Timing",
    icon: Clock,
    href: "/nrh-op-timing",
    gradient: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Social Media",
    icon: Instagram,
    href: "https://www.instagram.com/dreu.citu.wd?igsh=MWRjMmVlbzhjOWNvaw==",
    gradient: "from-red-500 to-yellow-500",
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
            <div className="flex items-center justify-center gap-4">
              <Star className="w-8 h-8 text-accent" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-primary tracking-tight">
                DREU-CITU
              </h1>
              <Star className="w-8 h-8 text-accent" />
            </div>
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
              {infoCards.map((card, index) => (
                <Link href={card.href} key={card.title} className="group">
                  <Card
                    className={cn(
                      "h-full transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative overflow-hidden",
                      "bg-card border-2 border-transparent hover:border-primary"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-30",
                        `bg-gradient-to-br ${card.gradient}`
                      )}
                    />
                    <CardContent className="flex flex-col items-center justify-center aspect-square p-4 sm:p-6 text-center text-foreground">
                      <div className="relative z-10 flex flex-col items-center justify-center">
                        <card.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 text-primary transition-transform duration-300 group-hover:scale-110" />
                        <h3 className="text-sm sm:text-base font-semibold">
                          {card.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 mt-auto bg-card border-t">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/9003093900"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/dreu.citu.wd?igsh=MWRjMmVlbzhjOWNvaw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
