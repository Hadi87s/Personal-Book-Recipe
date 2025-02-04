import { useContext } from "react";
import Recipe from "../../components/recipe/Recipe";
import "../screens.css";
import { RecipesContext } from "../../providers/recipesProvider";

const Recipes = () => {
  const { recipes } = useContext(RecipesContext);
  return (
    <div className="recipeContainer">
      {recipes.map((recipe, index) => (
        <Recipe recipe={recipe} key={index} />
      ))}
    </div>
  );
};

export default Recipes;
