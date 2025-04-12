// src/app/admin/recipes/new-recipe/page.tsx
"use client";

import { useRecipes } from "@/hooks/useRecipes";
import { useAuthStore } from "@/store/authStore";
import RecipeForm from "@/components/organisms/recipe/RecipeForm";
import { Recipe } from "@/types/recipe";

export default function CreateRecipePage() {
  const { handleCreateRecipe } = useRecipes();
  const { user } = useAuthStore();

  const handleSubmit = async (data: Recipe) => {
    await handleCreateRecipe({ ...data, authorId: user?.userId ?? "" });
  };

  return <RecipeForm onSubmit={handleSubmit} isEditing={false} />;
}
