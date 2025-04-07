export interface Recipe {
    _id?: string;
    title: string;
    description: string;
    ingredients: string[];
    steps: string[];
    image: string;
    videoUrl?: string;
    authorId: string;
    category?: string;
    rating?: number;
    duration: string;
    servings: number;
  }
  