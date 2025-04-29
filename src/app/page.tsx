
"use client";
import Header from "@/components/organisms/layout/Header";
import InviteSection from "@/components/organisms/layout/InviteSection";
import CategorySection from "@/components/organisms/recipe/CategorySection";
import { useRecipes } from "@/hooks/useRecipes";



export default function Home() {

  const { recipes} = useRecipes();

  const popularRecipes = recipes
    .filter((recipe) => recipe.rating >= 4.8)
    .map((recipe) => ({
      id: Number(recipe._id!),
      title: recipe.title,
      image: recipe.image,
      rating: recipe.rating ?? 0,
      duration: recipe.duration,
      servings: recipe.servings,
      author: "Chef Desconocido",
    }));
  const filteredRecipesDessert = recipes
    .filter((recipe) => recipe.category === "Postres")
    .map((recipe) => ({
      id: Number(recipe._id!),
      title: recipe.title,
      image: recipe.image,
      rating: recipe.rating ?? 0,
      duration: recipe.duration,
      servings: recipe.servings,
      author: "Chef Desconocido",
    }));
  return (

    <>

      <Header />

      <div>
        <CategorySection title="Recetas Populares" recipes={popularRecipes} />
        <CategorySection title="Postres Deliciosos" recipes={filteredRecipesDessert} />

        <InviteSection />
      </div>
    </>


  );
}
