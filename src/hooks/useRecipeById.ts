"use client";

import { useEffect, useState } from "react";
import { getRecipeById } from "@/libs/recipes";
import { Recipe } from "@/types/recipe";
import { useAlertStore } from "@/store/alertStore";

export function useRecipeById(recipeId: string) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(false);
  const { errorMessage } = useAlertStore.getState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getRecipeById(recipeId);
        setRecipe(data);
      } catch (error) {
        errorMessage("Error al cargar receta");
      } finally {
        setLoading(false);
      }
    };

    if (recipeId) fetchData();
  }, [recipeId]);

  return { recipe, loading };
}
