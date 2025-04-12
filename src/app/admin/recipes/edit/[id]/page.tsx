"use client";

import { useParams } from "next/navigation";
import { useRecipes } from "@/hooks/useRecipes";
import RecipeForm from "@/components/organisms/recipe/RecipeForm";
import { Recipe } from "@/types/recipe";

export default function EditRecipePage() {
  const { id } = useParams();
  const { recipes, handleUpdateRecipe } = useRecipes();

  const recipe = recipes.find((r) => r._id === id);

  const handleSubmit = async (data: Recipe) => {
    if (!recipe) return;

    await handleUpdateRecipe(id as string, data);
  };

  if (!recipe) return <p className="text-center p-6">Cargando...</p>;

  return <RecipeForm initialData={recipe} onSubmit={handleSubmit} isEditing />;
}
