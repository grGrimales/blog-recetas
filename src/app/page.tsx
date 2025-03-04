import Header from "@/components/organisms/layout/Header";
import InviteSection from "@/components/organisms/layout/InviteSection";
import CategorySection from "@/components/organisms/recipe/CategorySection";

const popularRecipes = [
  {
    id: 1,
    title: "Pasta Carbonara",
    image: "https://source.unsplash.com/1600x900/?food",
    rating: 4.8,
    duration: "30 min",
    servings: 4,
    author: "Chef John",
  },
  {
    id: 2,
    title: "Pollo al Curry",
    image: "https://source.unsplash.com/1600x900/?food",
    rating: 4.7,
    duration: "45 min",
    servings: 4,
    author: "Chef Maria",
  },
  {
    id: 3,
    title: "Pasta Carbonara",
    image: "https://source.unsplash.com/1600x900/?food",
    rating: 4.8,
    duration: "30 min",
    servings: 4,
    author: "Chef John",
  },
  {
    id: 4,
    title: "Pollo al Curry",
    image: "https://source.unsplash.com/1600x900/?food",
    rating: 4.7,
    duration: "45 min",
    servings: 4,
    author: "Chef Maria",
  },
];

const dessertRecipes = [
  {
    id: 3,
    title: "Tarta de Chocolate",
    image: "https://source.unsplash.com/1600x900/?food",
    rating: 5.0,
    duration: "50 min",
    servings: 6,
    author: "Chef Luis",
  },
  {
    id: 4,
    title: "Cheesecake de Fresa",
    image: "https://source.unsplash.com/1600x900/?food",
    rating: 4.9,
    duration: "60 min",
    servings: 8,
    author: "Chef Ana",
  },
];

export default function Home() {
  return (
    <>

      <Header />

      <div>
        <CategorySection title="Recetas Populares" recipes={popularRecipes} />
        <CategorySection title="Postres Deliciosos" recipes={dessertRecipes} />

        <InviteSection />
      </div>
    </>


  );
}
