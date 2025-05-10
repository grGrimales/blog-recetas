"use client";

import { useParams } from "next/navigation";
import { useRecipeById } from "@/hooks/useRecipeById";
import RecipeForm from "@/components/organisms/recipe/RecipeForm";
import { useRecipes } from "@/hooks/useRecipes";
import { Recipe } from "@/types/recipe";




export default function EditRecipePage() {
  const { id } = useParams();
  const { recipe, loading } = useRecipeById(id as string);
  const { handleUpdateRecipe } = useRecipes();

  if (loading) return <p className="p-6 text-center">Cargando receta...</p>;
  if (!recipe) return null;

  const handleSubmit = async (updatedData: Partial<Recipe>) => {
    await handleUpdateRecipe(id as string, updatedData);
  };

  return <RecipeForm initialData={recipe} onSubmit={handleSubmit} isEditing />;
}
