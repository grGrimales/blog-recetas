"use client";

import { useEffect, useState } from "react";
import { getRecipeById } from "@/libs/recipes";
import { Recipe } from "@/types/recipe";
import { useAlertStore } from "@/store/alertStore";

export function useRecipeById(recipeId: string) {
  const [recipe, setRecipe] = useState<Recipe>();
  const [loading, setLoading] = useState(false);
  const { errorMessage } = useAlertStore.getState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getRecipeById(recipeId);
        setRecipe(data);
      } catch (error) {
        errorMessage(error instanceof Error ? error.message : "Ocurrió un error desconocido");
      } finally {
        setLoading(false);
      }
    };

    if (recipeId) fetchData();
  }, [recipeId, errorMessage]);

  return { recipe, loading, errorMessage };
}
