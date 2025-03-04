import Link from "next/link";
import Button from "@/components/atoms/ui/Button";
import { PenSquare, Trash2 } from "lucide-react";

const recipes = [
  { id: 1, title: "Pasta Carbonara", author: "Chef John", rating: 4.5, status: "Publicada" },
  { id: 2, title: "Tacos al Pastor", author: "Chef Maria", rating: 4.8, status: "Borrador" },
  { id: 3, title: "Sushi Roll", author: "Chef Yuki", rating: 4.7, status: "Publicada" },
  { id: 4, title: "Pizza Margherita", author: "Chef Luigi", rating: 4.6, status: "En revisión" },
  { id: 5, title: "Pad Thai", author: "Chef Somchai", rating: 4.4, status: "Publicada" },
];

export default function RecipeTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Recetas</h2>
        <Link href="/admin/recipes/new">
          <Button variant="primary">Nueva Receta</Button>
        </Link>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-secondary">
            <th className="border border-gray-300 p-2 text-left">Título</th>
            <th className="border border-gray-300 p-2 text-left">Autor</th>
            <th className="border border-gray-300 p-2 text-left">Calificación</th>
            <th className="border border-gray-300 p-2 text-left">Estado</th>
            <th className="border border-gray-300 p-2 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id} className="border-t">
              <td className="p-2">{recipe.title}</td>
              <td className="p-2">{recipe.author}</td>
              <td className="p-2">{recipe.rating}</td>
              <td className="p-2">{recipe.status}</td>
              <td className="p-2 text-right space-x-2">
                <Link href={`/admin/recipes/edit/${recipe.id}`}>
                  <Button variant="outline" size="sm">
                    <PenSquare className="h-4 w-4" /> 
                  </Button>
                </Link>
                <Button variant="destructive" size="sm">
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
