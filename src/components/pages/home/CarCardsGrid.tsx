'use client';

import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const cars = [
  {
    id: 1,
    title: 'تويوتا كورولا',
    description: 'سيارة اقتصادية وعملية جدًا.',
    price: '300,000 EGP',
    images: ['/cars/car1-1.jpg', '/cars/car1-2.jpg'],
  },
  {
    id: 2,
    title: 'هيونداي توسان',
    description: 'دفع رباعي وراحة ممتازة.',
    price: '700,000 EGP',
    images: ['/cars/car2-1.jpg', '/cars/car2-2.jpg'],
  },
  {
    id: 3,
    title: 'كيا سيراتو',
    description: 'أداء قوي وتصميم أنيق.',
    price: '400,000 EGP',
    images: ['/cars/car3-1.jpg', '/cars/car3-2.jpg'],
  },
  {
    id: 4,
    title: 'شيفروليه أوبترا',
    description: 'مثالية للعائلات.',
    price: '350,000 EGP',
    images: ['/cars/car4-1.jpg', '/cars/car4-2.jpg'],
  },
  {
    id: 5,
    title: 'نيسان صني',
    description: 'سيارة موفرة واقتصادية.',
    price: '280,000 EGP',
    images: ['/cars/car5-1.jpg', '/cars/car5-2.jpg'],
  },
];

export default function CarCardsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-4">
      {cars.map((car) => (
        <Card key={car.id} className="overflow-hidden shadow">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="w-full h-48"
          >
            {car.images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={car.title}
                  className="w-full h-48 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <CardContent className="p-4">
            <CardTitle className="text-base">{car.title}</CardTitle>
            <CardDescription className="mt-1">{car.description}</CardDescription>
            <p className="text-primary font-semibold mt-2">{car.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
