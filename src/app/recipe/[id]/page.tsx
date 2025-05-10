"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Separator from "@/components/atoms/ui/Separator";
import Textarea from "@/components/atoms/ui/Textarea";
import Button from "@/components/atoms/ui/Button";
import { use } from "react";
import { useRecipeById } from "@/hooks/useRecipeById";

interface Params {
  id: string;
}

function getEmbedUrl(url: string): string {
  const match = url.match(/(?:\/watch\?v=|\/embed\/)([a-zA-Z0-9_-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

export default function RecipeDetail({ params }: { params: Promise<Params> }) {
  const { id } = use(params);
  const { recipe, loading } = useRecipeById(id);

  const [videoLoaded, setVideoLoaded] = useState(false);

  if (loading) return <p className="text-center py-8">Cargando receta...</p>;
  if (!recipe) return <p className="text-center py-8">Receta no encontrada.</p>;

  const staticComments = [
    {
      recipeId: id,
      author: "Maria",
      content: "¡Absolutamente deliciosa! La haré de nuevo.",
      rating: 5,
      date: "2024-02-20",
    },
    {
      recipeId: id,
      author: "Carlos",
      content: "Muy buena receta, aunque agregué un poco más de queso.",
      rating: 4,
      date: "2024-02-22",
    },
  ];

  const comments = recipe.comments ?? staticComments;

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <span>By {recipe.author}</span>
            <span>•</span>
            <span>{recipe.duration}</span>
            <span>•</span>
            <span>{recipe.servings} porciones</span>
            <span>•</span>
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span>{recipe.rating}</span>
          </div>
        </header>

        <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center">
              <span className="text-gray-500 text-lg">Cargando video...</span>
            </div>
          )}
          <iframe
            width="100%"
            height="100%"
            src={getEmbedUrl(recipe.videoUrl || "")}
            title="Video de la receta"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
            onLoad={() => setVideoLoaded(true)}
          />
        </div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
              <p className="text-muted-foreground">{recipe.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Instrucciones</h2>
              <ol className="space-y-4 list-decimal list-inside">
                {recipe.steps?.map((step, i) => (
                  <li key={i} className="text-muted-foreground">
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Comentarios</h2>
              <div className="space-y-6">
                {comments.map((comment, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{comment.author}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{comment.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm">{comment.rating}</span>
                    </div>
                    <p className="text-muted-foreground">{comment.content}</p>
                  </div>
                ))}
              </div>
              <form className="mt-6 space-y-4">
                <Textarea placeholder="Escribe un comentario..." className="min-h-[100px]" />
                <Button>Enviar comentario</Button>
              </form>
            </section>
          </div>

          <aside>
            <div className="sticky top-4 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Ingredientes</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i} className="text-muted-foreground">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
