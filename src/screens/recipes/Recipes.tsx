import { useContext, useEffect, useState } from "react";
import Recipe from "../../components/recipe/Recipe";
import "../screens.css";
import { RecipesContext } from "../../providers/recipesProvider";
import { useSearchParams } from "react-router-dom";
import { ECategory, IRecipe } from "../../@Types";

const Recipes = () => {
  const { recipes } = useContext(RecipesContext);
  const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>(recipes);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const search = params.get("search");
    const cat = params.get("cat");
    if (search) {
      setFilteredRecipes(
        recipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else if (cat) {
      setFilteredRecipes(recipes.filter((recipe) => recipe.category === cat));
    } else {
      setFilteredRecipes(recipes);
    }
  }, [params]);

  const handleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    setParams(params);
  };

  const handleCategoryFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const query = e.target.value;

    if (query) {
      params.set("cat", query);
    } else {
      params.delete("cat");
    }
    setParams(params);
  }; // refactor those two functions into one :)

  return (
    <>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            //value={params.get("search") as string} // making this field controlled
            onChange={handleSearchFilter}
          />
        </div>
        <div className="category">
          <select name="" id="" onChange={handleCategoryFilter}>
            <option value="">All</option>
            <option value={ECategory.BREAK_FAST}>Breakfast</option>
            <option value={ECategory.LUNCH}>Lunch</option>
            <option value={ECategory.DINNER}>Dinner</option>
            <option value={ECategory.DESSERT}>Dessert</option>
          </select>
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
