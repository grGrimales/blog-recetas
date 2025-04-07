import { useAuthStore } from "@/store/authStore";
import { Recipe } from "@/types/recipe";

const API_URL = "http://localhost:3001/api/recipes";

function getToken() {
  return useAuthStore.getState().token || localStorage.getItem("token");
}

export async function fetchRecipes() {
  const token = getToken();
  if (!token) throw new Error("Token no disponible");

  const res = await fetch(API_URL, {
    headers: { token: `${token}` },
  });

  if (!res.ok) throw new Error("Error al obtener recetas");
  return res.json();
}

export async function createRecipe(recipeData: Recipe) {
  const token = getToken();
  if (!token) throw new Error("Token no disponible");

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: `${token}`,
    },
    body: JSON.stringify(recipeData),
  });

  if (!res.ok) throw new Error("Error al crear la receta");
  return res.json();
}

export async function updateRecipe(recipeId: string, updatedFields: Partial<Recipe>) {
  const token = getToken();
  if (!token) throw new Error("Token no disponible");

  const res = await fetch(`${API_URL}/${recipeId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: `${token}`,
    },
    body: JSON.stringify(updatedFields),
  });

  if (!res.ok) throw new Error("Error al actualizar la receta");
  return res.json();
}
