import Link from "next/link";
import Button from "@/components/atoms/ui/Button";
import RecipeTable from "@/components/organisms/admin/RecipeTable";

const recipes = [
  { id: 1, title: "Pasta Carbonara", author: "Chef John", rating: 4.5, status: "Publicada" },
  { id: 2, title: "Tacos al Pastor", author: "Chef Maria", rating: 4.8, status: "Borrador" },
  { id: 3, title: "Sushi Roll", author: "Chef Yuki", rating: 4.7, status: "Publicada" },
  { id: 4, title: "Pizza Margherita", author: "Chef Luigi", rating: 4.6, status: "En revisión" },
  { id: 5, title: "Pad Thai", author: "Chef Somchai", rating: 4.4, status: "Publicada" },
];

export default function RecipePage() {
  return (

      <RecipeTable/>

  );
}
