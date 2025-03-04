import { Star, Clock } from "lucide-react";
import Link from "next/link";

const popularRecipes = [
  {
    id: 1,
    image: "/images/recipe1.jpg",
    title: "Pasta Carbonara",
    rating: "4.8",
    time: "30 min",
  },
  {
    id: 2,
    image: "/images/recipe2.jpg",
    title: "Sopa de Tomate",
    rating: "4.6",
    time: "25 min",
  },
  {
    id: 3,
    image: "/images/recipe3.jpg",
    title: "Hamburguesa Gourmet",
    rating: "5.0",
    time: "40 min",
  },
  {
    id: 4,
    image: "/images/recipe4.jpg",
    title: "Pizza Margarita",
    rating: "4.7",
    time: "35 min",
  },
];

export default function PopularRecipes() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-6">Recetas Populares</h2>

      {/* Grid de Recetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Imagen */}
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${recipe.image})` }}
            />

            {/* Contenido */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral">{recipe.title}</h3>

              {/* Rating y Tiempo */}
              <div className="flex items-center justify-between mt-2 text-gray-600 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>{recipe.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{recipe.time}</span>
                </div>
              </div>

              {/* Botón */}
              <div className="mt-4">
                <Link href={`/recipe/${recipe.id}`}>
                  <button className="w-full bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition">
                    Ver Receta
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
