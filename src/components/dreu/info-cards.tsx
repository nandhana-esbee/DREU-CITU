import Image from 'next/image';
import {
  CalendarDays,
  Award,
  Images,
  QrCode,
  BarChart3,
  BadgeIndianRupee,
  Clock,
  Share2,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const cardData = [
  {
    title: 'Holidays List',
    icon: CalendarDays,
    link: 'https://drive.google.com/drive/folders/1e42HXjdW46mcDmyBM1kRGiJaKTN47Vwh?usp=sharing',
    imageId: 'holidays-card',
  },
  {
    title: 'Promotions',
    icon: Award,
    link: 'https://drive.google.com/drive/folders/1JKOjxmnniyLn8OY-pEagV5ytSU9LcLU_?usp=drive_link',
    imageId: 'promotions-card',
  },
  {
    title: 'Images',
    icon: Images,
    link: 'https://drive.google.com/drive/folders/1H9DuEqDt17hEMtqJC6sb9YcfGADmU1KG?usp=drive_link',
    imageId: 'images-card',
  },
  {
    title: 'RH/PER QR Codes',
    icon: QrCode,
    link: 'https://drive.google.com/drive/folders/1DLIt1BZ6c50lRqPdPagMZIxvg-QGMwuh?usp=drive_link',
    imageId: 'qr-card',
  },
  {
    title: 'Pay Chart',
    icon: BarChart3,
    link: 'https://drive.google.com/drive/folders/1OK9o5Kz5GXHHvrgfrfFzbcTsnvgVRHwz?usp=drive_link',
    imageId: 'pay-chart-card',
  },
  {
    title: 'Incentive Rate',
    icon: BadgeIndianRupee,
    link: 'https://drive.google.com/drive/folders/1Az8cZkAtd4NAJlWTJ5Bog3Bxe2z-FNN1?usp=drive_link',
    imageId: 'incentive-card',
  },
  {
    title: 'NRH OP Timing',
    icon: Clock,
    link: 'https://drive.google.com/drive/folders/1nVl-OBIVBK8SVuo9EPOlVb6bjn-J2Db4?usp=sharing',
    imageId: 'timing-card',
  },
  {
    title: 'Social Media',
    icon: Share2,
    link: 'https://www.instagram.com/dreu.citu.wd?igsh=MWRjMmVlbzhjOWNvaw==',
    imageId: 'social-card',
  },
];

const InfoCards = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card) => {
          const cardImage = PlaceHolderImages.find((img) => img.id === card.imageId);
          const Icon = card.icon;

          return (
            <a
              key={card.title}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-48 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              {cardImage && (
                <Image
                  src={cardImage.imageUrl}
                  alt={`Background for ${card.title}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={cardImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-colors duration-300 group-hover:bg-black/60"></div>
              <div className="relative flex h-full flex-col items-center justify-center p-4 text-center text-white">
                <div className="relative flex items-center justify-center h-20 w-20">
                  <Icon className="h-12 w-12 text-white drop-shadow-lg" />
                </div>
                <h3 className="mt-2 font-bold text-lg font-headline">{card.title}</h3>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default InfoCards;
