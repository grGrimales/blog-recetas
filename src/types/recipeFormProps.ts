import { Recipe } from "./recipe";

export interface RecipeFormProps {
    initialData?: Recipe;  
    onSubmit: (data: Recipe) => Promise<void>;
    isEditing?: boolean;
  }
  