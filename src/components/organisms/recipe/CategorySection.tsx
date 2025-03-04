import RecipeCard from "../../molecules/recipe/RecipeCard";

interface CategorySectionProps {
  title: string;
  recipes: Array<{
    id: number;
    title: string;
    image: string;
    rating: number;
    duration: string;
    servings?: number;
    author: string;
  }>;
}

export default function CategorySection({ title, recipes }: CategorySectionProps) {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título con barra lateral */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
          <span className="inline-block w-2 h-8 bg-primary mr-3 rounded-full"></span>
          {title}
        </h2>
        
        {/* Grid de recetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}
