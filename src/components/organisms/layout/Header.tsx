"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star, Clock, Users } from "lucide-react";
import Link from "next/link";
import Button from "@/components/atoms/ui/Button";

export default function Header() {
  const slides = [
    {
      image: "https://source.unsplash.com/1600x900/?food",
      title: "Pasta Carbonara Italiana",
      description: "Una receta clásica italiana con huevos, queso y panceta crujiente",
      rating: "4.8",
      time: "30 min",
      servings: "4 porciones",
      chef: "Chef Marco",
    },
    {
      image: "https://source.unsplash.com/1600x900/?food",
      title: "Sopa de Tomate Casera",
      description: "Una sopa reconfortante con tomates frescos y albahaca",
      rating: "4.6",
      time: "25 min",
      servings: "2 porciones",
      chef: "Chef Sofía",
    },
    {
      image: "https://source.unsplash.com/1600x900/?food",
      title: "Hamburguesa Gourmet",
      description: "Jugosa hamburguesa con queso derretido y pan artesanal",
      rating: "5.0",
      time: "40 min",
      servings: "1 porción",
      chef: "Chef David",
    },
  ];

  return (
    <header className="relative w-full  h-[500px] md:h-[600px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative flex items-center justify-center "
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Capa de oscurecimiento */}
              <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Contenedor de texto */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-3">{slide.title}</h2>
                  <p className="text-lg md:text-xl mb-6 text-white/90">{slide.description}</p>

                  {/* Información adicional */}
                  <div className="flex flex-wrap gap-4 mb-6 text-white/80">

                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      <span>{slide.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-5 w-5 text-white" />
                      <span>{slide.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-5 w-5 text-white" />
                      <span>{slide.servings}</span>
                    </div>
                    <span>Por {slide.chef}</span>
                  </div>
                  <Link href="/recipes">
                         <Button className="px-6 py-2 text-lg ">     Ver Receta</Button>

                  </Link>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}
