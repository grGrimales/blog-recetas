import Image from "next/image";
import { Star } from "lucide-react";
import Separator from "@/components/atoms/ui/Separator";
import Textarea from "@/components/atoms/ui/Textarea";
import Button from "@/components/atoms/ui/Button";


interface RecipeDetailProps {
    params: { id: string };
}

const recipe = {
    id: 1,
    title: "Pasta Carbonara",
    author: "Chef John",
    rating: 4.5,
    duration: "30 min",
    servings: 4,
    video: "https://www.youtube.com/embed/3AAdKl1UYZs",
    image: "/images/recipe1.jpg",
    description: "Una receta clásica italiana con huevos, queso, panceta y pimienta negra.",
    ingredients: [
        "400g de spaghetti",
        "200g de panceta",
        "4 huevos grandes",
        "100g de Pecorino Romano",
        "100g de Parmigiano-Reggiano",
        "Pimienta negra al gusto",
        "Sal al gusto",
    ],
    instructions: [
        "Hervir una olla grande con agua y sal.",
        "Cocinar el spaghetti según las instrucciones del paquete.",
        "Mientras tanto, freír la panceta hasta que esté crujiente.",
        "Batir los huevos con el queso rallado y pimienta negra.",
        "Escurrir la pasta y mezclar con la panceta y la salsa de huevo.",
        "Servir caliente con más queso y pimienta al gusto.",
    ],
    comments: [
        {
            author: "Maria",
            content: "¡Absolutamente deliciosa! La haré de nuevo.",
            rating: 5,
            date: "2024-02-20",
        },
        {
            author: "Carlos",
            content: "Muy buena receta, aunque agregué un poco más de queso.",
            rating: 4,
            date: "2024-02-22",
        },
    ],
};

export default function RecipeDetail({ params }: RecipeDetailProps) {
    return (
        <div className="container mx-auto px-4 py-8">
            <article className="max-w-4xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <span>By {recipe.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>•</span>
                            <span>{recipe.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>•</span>
                            <span>{recipe.servings} servings</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span>•</span>
                            <Star className="w-4 h-4 fill-primary text-primary" />
                            <span>{recipe.rating}</span>
                        </div>
                    </div>
                </header>

                <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                    <iframe
                        width="100%"
                        height="100%"
                        src={recipe.video}
                        title="Video de la receta"
                        frameBorder="0"
                        allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                </div>

                <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Description</h2>
                            <p className="text-muted-foreground">{recipe.description}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
                            <ol className="space-y-4 list-decimal list-inside">
                                {recipe.instructions.map((step, index) => (
                                    <li key={index} className="text-muted-foreground">
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </section>

                        <Separator />

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
                            <div className="space-y-6">
                                {recipe.comments.map((comment, index) => (
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
                                <Textarea placeholder="Leave a comment..." className="min-h-[100px]" />
                                <Button>Submit Comment</Button>
                            </form>
                        </section>
                    </div>

                    <div>
                        <div className="sticky top-4 space-y-8">
                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
                                <ul className="space-y-2">
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index} className="text-muted-foreground">
                                            {ingredient}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
