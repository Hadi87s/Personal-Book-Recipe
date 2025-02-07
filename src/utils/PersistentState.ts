import { useEffect, useState } from "react";
import { ECategory, IRecipe } from "../@Types";
import { nanoid } from "nanoid";

const INITIAL_LIST: IRecipe[] = [
  {
    id: nanoid(),
    title: "Chicken Biryani",
    image:
      "https://images.unsplash.com/photo-1630851840633-f96999247032?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "its very tasteful and I love it so much!",
    category: ECategory.BREAK_FAST,
    ingredients: ["Chicken", "Salt", "Rice", "Seasoning"],
    instructions: [
      "Put the ingredients together",
      "Mix very well so the rice take the flavour",
      "cook it for 30m",
    ],
  },
  {
    id: nanoid(),
    title: "Chicken Serrano",
    image:
      "https://images.unsplash.com/photo-1606728035253-49e8a23146de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "its very delicious and I love it.",
    category: ECategory.DESSERT,
    ingredients: ["Chicken", "Salt", "Rice", "Seasoning"],
    instructions: [
      "Put the ingredients together",
      "Mix very well so the rice take the flavour",
      "cook it for 30m",
    ],
  },
];

export function usePersistentState(): [
  IRecipe[],
  React.Dispatch<React.SetStateAction<IRecipe[]>>
] {
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
