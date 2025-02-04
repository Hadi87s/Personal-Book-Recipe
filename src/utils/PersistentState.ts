import { useEffect, useState } from "react";
import { ECategory, IRecipe } from "../@Types";
import { nanoid } from "nanoid";

const INITIAL_LIST: IRecipe[] = [
  {
    id: nanoid(),
    title: "Chicken Biryani",
    image: "../../../public/recipe1.jpg",
    description: "its very tasteful and I love it so much!",
    category: ECategory.BREAK_FAST,
    ingredients: [],
    instructions: [],
  },
  {
    id: nanoid(),
    title: "Chicken Serrano",
    image: "../../../public/recipe2.jpg",
    description: "its very delicious and I love it.",
    category: ECategory.DESSERT,
    ingredients: [],
    instructions: [],
  },
  {
    id: nanoid(),
    title: "Chicken Serrano",
    image: "../../../public/recipe2.jpg",
    description: "its very delicious and I love it.",
    category: ECategory.DESSERT,
    ingredients: [],
    instructions: [],
  },
  {
    id: nanoid(),
    title: "Chicken Serrano",
    image: "../../../public/recipe2.jpg",
    description: "its very delicious and I love it.",
    category: ECategory.BREAK_FAST,
    ingredients: [],
    instructions: [],
  },
  {
    id: nanoid(),
    title: "Chicken Serrano",
    image: "../../../public/recipe2.jpg",
    description: "its very delicious and I love it.",
    category: ECategory.LUNCH,
    ingredients: [],
    instructions: [],
  },
  {
    id: nanoid(),
    title: "Chicken Serrano",
    image: "../../../public/recipe2.jpg",
    description: "its very delicious and I love it.",
    category: ECategory.LUNCH,
    ingredients: [],
    instructions: [],
  },
  {
    id: nanoid(),
    title: "Chicken Serrano",
    image: "../../../public/recipe2.jpg",
    description: "its very delicious and I love it.",
    category: ECategory.DINNER,
    ingredients: [],
    instructions: [],
  },
  {
    id: nanoid(),
    title: "Chicken Serrano",
    image: "../../../public/recipe2.jpg",
    description: "its very delicious and I love it.",
    category: ECategory.LUNCH,
    ingredients: [],
    instructions: [],
  },
  {
    id: nanoid(),
    title: "Chicken Serrano",
    image: "../../../public/recipe2.jpg",
    description: "its very delicious and I love it.",
    category: ECategory.LUNCH,
    ingredients: [],
    instructions: [],
  },
];

export function usePersistentState() {
  const [recipes, setRecipes] = useState<IRecipe[]>(() => {
    const data = localStorage.getItem("recipes");
    if (!data) {
      return INITIAL_LIST;
    } else {
      return JSON.parse(data);
    }
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  return [recipes, setRecipes];
}
