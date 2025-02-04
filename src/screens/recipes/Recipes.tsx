import { useContext, useEffect, useState } from "react";
import Recipe from "../../components/recipe/Recipe";
import "../screens.css";
import { RecipesContext } from "../../providers/recipesProvider";
import { useSearchParams } from "react-router-dom";
import { IRecipe } from "../../@Types";

const Recipes = () => {
  const { recipes } = useContext(RecipesContext);
  const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>(recipes);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const search = params.get("search");
    if (search) {
      setFilteredRecipes(
        recipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredRecipes(recipes);
    }
  }, [params]);

  return (
    <>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            onChange={(e) => {
              const query = e.target.value;
              if (query) {
                params.set("search", query);
              } else {
                params.delete("search");
              }
              setParams(params);
            }}
          />
        </div>
      </div>
      <div className="recipeContainer">
        {filteredRecipes.map((recipe, index) => (
          <Recipe recipe={recipe} key={index} />
        ))}
      </div>
    </>
  );
};

export default Recipes;
