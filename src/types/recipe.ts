export interface Recipe {
    _id?:  string;
    title: string;
    description: string;
    ingredients: string[];
    steps?: string[];
    image: string;
    videoUrl?: string;
    authorId: string;
    category?: string;
    author?: string;
    rating: number;
    duration: string;
    servings: number;
    comments?: Comments[];
  }


  interface Comments {
    _id?: string;
    recipeId: string;
    author: string;
    content: string;
    rating: number;
    date: string;
  }
  