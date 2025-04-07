"use client";

import { useEffect, useState } from "react";
import { fetchRecipes, createRecipe, updateRecipe } from "@/libs/recipes";
import { Recipe } from "@/types/recipe";

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // GET - Obtener recetas al cargar
  useEffect(() => {
    const loadRecipes = async () => {
      setLoading(true);
      try {
        const data = await fetchRecipes();
        setRecipes(data);
      } catch (err) {
        setError("Error al cargar recetas");
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, []);

  // POST - Crear receta
  const handleCreateRecipe = async (recipeData: Recipe) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const newRecipe = await createRecipe(recipeData);
      setRecipes((prev) => [...prev, newRecipe]);
      setSuccess("Receta creada exitosamente");
    } catch (err) {
      setError("Error al crear receta");
    } finally {
      setLoading(false);
    }
  };

  // PUT - Actualizar receta
  const handleUpdateRecipe = async (recipeId: string, updatedFields: Partial<Recipe>) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const updated = await updateRecipe(recipeId, updatedFields);
      setRecipes((prev) =>
        prev.map((r) => (r._id === recipeId ? { ...r, ...updated } : r))
      );
      setSuccess("Receta actualizada correctamente");
    } catch (err) {
      setError("Error al actualizar receta");
    } finally {
      setLoading(false);
    }
  };

  return {
    recipes,
    loading,
    error,
    success,
    handleCreateRecipe,
    handleUpdateRecipe,
  };
}
