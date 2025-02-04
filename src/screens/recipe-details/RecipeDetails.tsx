import { useParams } from "react-router-dom";
import { RecipesContext } from "../../providers/recipesProvider";
import { useContext } from "react";

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes } = useContext(RecipesContext);
  return (
    <div>
      RecipeDetails
      <br />
      {recipes.map((recipe) => (recipe.id === id ? recipe.description : null))} 
    </div> // filtering process...
  );
};

export default RecipeDetails;
