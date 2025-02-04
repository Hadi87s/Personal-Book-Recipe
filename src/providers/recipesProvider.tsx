import { nanoid } from "nanoid";
import React, { ReactNode, createContext, useState } from "react";
import { IRecipe } from "../@Types";

interface IContext {
  children: React.ReactNode;
}

export const RecipesContext = createContext<{
  recipes: IRecipe[];
  setRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>;
}>({ recipes: [], setRecipes: () => {} });

const RecipesProvider = ({ children }: IContext) => {
  const [recipes, setRecipes] = useState<IRecipe[]>([
    {
      id: nanoid(),
      name: "Chicken Biryani",
      image: "../../../public/recipe1.jpg",
      description: "its very tasteful and I love it so much!",
    },
    {
      id: nanoid(),
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
    {
      id: nanoid(),
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
    {
      id: nanoid(),
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
    {
      id: nanoid(),
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
    {
      id: nanoid(),
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
    {
      id: nanoid(),
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
    {
      id: nanoid(),
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
    {
      id: nanoid(),
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
  ]);

  const value = { recipes, setRecipes };
  return (
    <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
  );
};

export default RecipesProvider;
