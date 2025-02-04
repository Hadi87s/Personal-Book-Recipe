export interface IRecipe {
  id: string;
  title: string;
  image: string;
  description: string;
  category: ECategory;
  ingredients: string[];
  instructions: string[];
}

export enum ECategory {
  BREAK_FAST = "Breakfast",
  LUNCH = "Lunch",
  DINNER = "Dinner",
  DESSERT = "Desert",
}
