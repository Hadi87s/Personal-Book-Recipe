export interface IRecipe {
  id: string;
  name: string;
  image: string;
  description: string;
  category: ECategory;
}

export enum ECategory {
  BREAK_FAST = "Breakfast",
  LUNCH = "Lunch",
  DINNER = "Dinner",
  DESSERT = "Desert",
}
