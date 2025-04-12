"use client";

import { useState, useEffect } from "react";
import Input from "@/components/atoms/ui/Input";
import Textarea from "@/components/atoms/ui/Textarea";
import Button from "@/components/atoms/ui/Button";
import Separator from "@/components/atoms/ui/Separator";
import Select from "@/components/atoms/ui/Select";

import { RecipeFormProps } from "@/types/recipeFormProps";



export default function RecipeForm({ initialData, onSubmit, isEditing = false }: RecipeFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [category, setCategory] = useState("General");
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [instructions, setInstructions] = useState<string[]>([""]);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setDuration(initialData.duration.replace(" min", ""));
      setServings(initialData.servings.toString());
      setImage(initialData.image);
      setVideoUrl(initialData.videoUrl || '');
      setCategory(initialData.category || '');
      setIngredients(initialData.ingredients || []);
      setInstructions(initialData.steps || []);
    }
  }, [initialData]);


  

  const addIngredient = () => setIngredients([...ingredients, ""]);
  const addInstruction = () => setInstructions([...instructions, ""]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const recipe = {
      title,
      description,
      duration: `${duration} min`,
      servings: Number(servings),
      image,
      videoUrl,
      category,
      ingredients,
      steps: instructions,
      authorId: initialData?.authorId || "",
    };

    try {
      await onSubmit(recipe);
      if (!isEditing) {
        setTitle("");
        setDescription("");
        setDuration("");
        setServings("");
        setImage("");
        setVideoUrl("");
        setCategory("General");
        setIngredients([""]);
        setInstructions([""]);
      }
    } catch (error) {
      console.error("Error al guardar la receta", error);
    }
  };

  return (
    <div className="bg-background p-6 rounded-lg shadow-md max-w-3xl mx-auto">
         <h2 className="text-3xl font-bold mb-6 text-primary">Crear Nueva Receta</h2>
         <form onSubmit={handleSubmit} className="space-y-6">
           {/* Información Básica */}
           <section className="bg-white p-4 rounded-md shadow-md">
             <h3 className="text-2xl font-semibold mb-4">Información Básica</h3>
             <div className="space-y-4">
               <div>
                 <label className="block text-neutral font-medium">Título de la Receta</label>
                 <Input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Ingrese el título de la receta" required />
               </div>
               <div>
                 <label className="block text-neutral font-medium">Descripción</label>
                 <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Breve descripción de la receta" required />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                   <label className="block text-neutral font-medium">Duración (minutos)</label>
                   <Input value={duration} onChange={(e) => setDuration(e.target.value)} type="number" placeholder="30" required />
                 </div>
                 <div>
                   <label className="block text-neutral font-medium">Porciones</label>
                   <Input value={servings} onChange={(e) => setServings(e.target.value)} type="number" placeholder="4" required />
                 </div>
               </div>
               <div>
                 <label className="block text-neutral font-medium">URL Imagen</label>
                 <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://..." />
               </div>
               <div>
                 <label className="block text-neutral font-medium">URL del video</label>
                 <Input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} placeholder="https://youtube.com/..." />
               </div>
               <div>
               <label className="block text-neutral font-medium">Categoría</label>
               <Select
                 value={category}
                 onChange={(e) => setCategory(e.target.value)}
                 options={["Panes", "Tortas", "Ensaladas"]}
               />
               </div>
   
             </div>
           </section>
   
           <Separator />
   
           {/* Ingredientes */}
           <section className="bg-white p-4 rounded-md shadow-md">
             <h3 className="text-2xl font-semibold mb-4">Ingredientes</h3>
             <div className="space-y-4">
               {ingredients?.map((_, index) => (
                 <div key={index}>
                   <label className="block text-neutral font-medium">Ingrediente {index + 1}</label>
                   <Input
                     type="text"
                     placeholder="Ej: 200g de harina"
                     value={ingredients[index]}
                     onChange={(e) => {
                       const newIngredients = [...ingredients];
                       newIngredients[index] = e.target.value;
                       setIngredients(newIngredients);
                     }}
                     required
                   />
                 </div>
               ))}
             </div>
             <div className="mt-4">
               <Button type="button" variant="secondary" onClick={addIngredient}>
                 Agregar Ingrediente
               </Button>
             </div>
           </section>
   
           <Separator />
   
           {/* Instrucciones */}
           <section className="bg-white p-4 rounded-md shadow-md">
             <h3 className="text-2xl font-semibold mb-4">Instrucciones</h3>
             <div className="space-y-4">
               {instructions?.map((_, index) => (
                 <div key={index}>
                   <label className="block text-neutral font-medium">Paso {index + 1}</label>
                   <Textarea
                     placeholder="Describa el paso de la receta"
                     value={instructions[index]}
                     onChange={(e) => {
                       const newInstructions = [...instructions];
                       newInstructions[index] = e.target.value;
                       setInstructions(newInstructions);
                     }}
                     required
                   />
                 </div>
               ))}
             </div>
             <div className="mt-4">
               <Button type="button" variant="secondary" onClick={addInstruction}>
                 Agregar Instrucción
               </Button>
             </div>
           </section>
   
           <Button type="submit" className="w-full">
            {isEditing ? "Editar Receta" : "Crear Receta"}
          </Button>

         </form>
       </div>
  );
}
