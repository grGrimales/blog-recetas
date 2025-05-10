"use client";

import { useEffect, useState } from "react";
import RecipeCard from "@/components/molecules/recipe/RecipeCard";
import { Recipe } from "@/types/recipe";
import { fetchRecipes } from "@/libs/recipes";

export default function AllRecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRecipes() {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ocurrió un error desconocido");
      } finally {
        setLoading(false);
      }
    }

    loadRecipes();
  }, []);

  if (loading) return <p className="text-center mt-10">Cargando recetas...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Todas las Recetas</h1>
      {recipes.length === 0 ? (
        <p className="text-center text-gray-500">No hay recetas aún.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe._id}
              recipe={{
                id: recipe._id || "",
                title: recipe.title,
                image: recipe.image,
                rating: recipe.rating,
                duration: recipe.duration,
                servings: recipe.servings,
                author: recipe.author || "Autor desconocido",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
