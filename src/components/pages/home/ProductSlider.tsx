'use client';

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

const products = [
    { id: 1, name: "تيشيرت رياضي", price: "$25", image: "/images/prod1.jpg" },
    { id: 2, name: "حذاء رياضي", price: "$80", image: "/images/prod2.jpg" },
    { id: 3, name: "شنطة ظهر", price: "$45", image: "/images/prod3.jpg" },
    { id: 4, name: "نظارة شمس", price: "$20", image: "/images/prod4.jpg" },
];

export default function ProductSlider() {
    return (
        <div className="px-4 py-6">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <Card className="overflow-hidden h-48 w-48">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="h-full w-full object-contain"
                            />
                            <CardContent className="p-4">
                                <CardTitle className="text-base font-semibold">
                                    {product.name}
                                </CardTitle>
                                <p className="text-muted-foreground text-sm">{product.price}</p>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
