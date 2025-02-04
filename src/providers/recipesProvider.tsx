import React, { createContext } from "react";
import { IRecipe } from "../@Types";
import { usePersistentState } from "../utils/PersistentState";

interface IContext {
  children: React.ReactNode;
}

export const RecipesContext = createContext<{
  recipes: IRecipe[] | React.Dispatch<React.SetStateAction<IRecipe[]>>;
  setRecipes: IRecipe[] | React.Dispatch<React.SetStateAction<IRecipe[]>>;
}>({ recipes: [], setRecipes: () => {} });

const RecipesProvider = ({ children }: IContext) => {
  const [recipes, setRecipes] = usePersistentState();

  const value = { recipes, setRecipes };
  return (
    <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
  );
};

export default RecipesProvider;
