import { useState } from "react";
import { IRecipe } from "../../@Types";
import Recipe from "../../components/recipe/Recipe";
import "../screens.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([
    {
      name: "Chicken Biryani",
      image: "../../../public/recipe1.jpg",
      description: "its very tasteful and I love it so much!",
    },
    {
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
    {
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
    {
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
    {
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
    {
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
    {
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
    {
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
    {
      name: "Chicken Serrano",
      image: "../../../public/recipe2.jpg",
      description: "its very delicious and I love it.",
    },
  ]);
  return (
    <div className="recipeContainer">
      {recipes.map((recipe, index) => (
        <Recipe recipe={recipe} key={index} />
      ))}
    </div>
  );
};

export default Recipes;
