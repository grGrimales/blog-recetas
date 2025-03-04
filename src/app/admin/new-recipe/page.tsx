"use client";

import RecipeForm from "@/components/molecules/recipe/RecipeForm";


export default function NewRecipePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Crear Nueva Receta</h1>
      <RecipeForm />
    </div>
  );
}
