"use client";

import Link from "next/link";
import { PenSquare, Trash2 } from "lucide-react";
import Button from "@/components/atoms/ui/Button";
import { useRecipes } from "@/hooks/useRecipes";
import { useConfirmStore } from "@/store/confirmStore";

export default function RecipeTable() {
  const { recipes, loading, error, handleDeleteRecipe } = useRecipes();

  if (loading) {
    return <p className="p-6 text-center">Cargando recetas...</p>;
  }

  if (error) {
    return <p className="p-6 text-center text-red-500">{error}</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Recetas</h2>
        <Link href="/admin/recipes/new-recipe">
          <Button variant="primary">Nueva Receta</Button>
        </Link>
      </div>
      <table className="w-full rounded-md border-gray-200">
        <thead>
          <tr className="bg-lightGray text-center">
            <th className="p-2">Título</th>
            <th className="p-2">Categoria</th>
            <th className="p-2">Calificación</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe._id} className="border-t text-center">
              <td className="p-2">{recipe.title}</td>
              <td className="p-2">{recipe.category}</td>
              <td className="p-2">{recipe.rating}</td>
              <td className="p-2 space-x-2">
                <Link href={`/admin/recipes/edit/${recipe._id}`}>
                  <Button variant="outline" size="sm">
                    <PenSquare className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="destructive" size="sm" onClick={() => {
                  useConfirmStore.getState().open(
                    "¿Estás seguro de que deseas eliminar esta receta?",
                    () => handleDeleteRecipe(String(recipe._id!)),
                  );
                }}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
