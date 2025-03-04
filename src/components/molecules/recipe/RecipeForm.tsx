"use client";

import { useState } from "react";
import Button from "@/components/atoms/ui/Button";
import Input from "@/components/atoms/ui/Input";
import Textarea from "@/components/atoms/ui/Textarea";

export default function RecipeForm() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    author: "",
    description: "",
    ingredients: "",
    steps: "",
    image: "",
    videoUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Receta creada:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-background p-6 rounded-lg shadow-md max-w-2xl mx-auto space-y-4">
      <Input name="title" placeholder="Título de la receta" value={form.title} onChange={handleChange} required />
      <Input name="category" placeholder="Categoría" value={form.category} onChange={handleChange} required />
      <Input name="author" placeholder="Autor" value={form.author} onChange={handleChange} required />
      <Textarea name="description" placeholder="Descripción" value={form.description} onChange={handleChange} required />
      <Textarea name="ingredients" placeholder="Ingredientes (separados por comas)" value={form.ingredients} onChange={handleChange} required />
      <Textarea name="steps" placeholder="Pasos (separados por comas)" value={form.steps} onChange={handleChange} required />
      <Input name="image" placeholder="URL de la imagen" value={form.image} onChange={handleChange} required />
      <Input name="videoUrl" placeholder="URL del video de YouTube" value={form.videoUrl} onChange={handleChange} />

      <div className="flex justify-end gap-4">
        <Button variant="outline" type="reset">Cancelar</Button>
        <Button variant="primary" type="submit">Guardar Receta</Button>
      </div>
    </form>
  );
}
