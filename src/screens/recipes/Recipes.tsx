import { useState } from "react";
import { IRecipe } from "../../@Types";
import Recipe from "../../components/recipe/Recipe";
import "../screens.css";

const recipe1: IRecipe = {
  name: "Chicken Biryani",
  image: "../../../public/recipe1.jpg",
  description: "its very tasteful and I love it so much!",
};
const recipe2: IRecipe = {
  name: "Chicken Serrano",
  image: "../../../public/recipe2.jpg",
  description: "its very delicious and I love it.",
};

const Recipes = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  return (
    <div className="recipeContainer">
      <Recipe recipe={recipe1} />
      <Recipe recipe={recipe2} />
    </div>
  );
};

export default Recipes;
