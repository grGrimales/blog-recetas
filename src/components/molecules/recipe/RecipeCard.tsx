import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Users } from "lucide-react";

interface RecipeCardProps {
  recipe: {
    id: number;
    title: string;
    image: string;
    rating: number;
    duration: string;
    servings?: number;
    author: string;
  };
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all duration-200"
    >
      {/* Imagen */}
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
          {recipe.title}
        </h3>
        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <span>{recipe.author}</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span>{recipe.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.duration}</span>
          </div>
          {recipe.servings && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{recipe.servings}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
