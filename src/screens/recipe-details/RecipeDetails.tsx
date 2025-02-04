import { useParams } from "react-router-dom";
import { RecipesContext } from "../../providers/recipesProvider";
import { useContext } from "react";
import Details from "../../components/Details/Details";

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes } = useContext(RecipesContext);
  return (
    <div>
      {recipes.map((recipe) =>
        recipe.id === id ? <Details recipe={recipe} /> : null
      )}
    </div> // filtering process...
  );
};

export default RecipeDetails;
