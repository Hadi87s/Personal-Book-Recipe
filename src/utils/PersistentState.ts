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
    image: "../../../public/recipe2.jpg",
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
