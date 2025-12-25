"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const ImageCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const carouselImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith("carousel")
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
    }, 3000); // Autoplay every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="mb-12">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {carouselImages.map((img) => (
            <CarouselItem key={img.id}>
              <div className="relative h-64 md:h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover"
                  data-ai-hint={img.imageHint}
                  priority={img.id === "carousel1"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ImageCarousel;
