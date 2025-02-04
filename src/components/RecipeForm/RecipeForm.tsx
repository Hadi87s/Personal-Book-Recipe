import { useContext, useRef, useState } from "react";
import "./recipe-form.css";
import { RecipesContext } from "../../providers/recipesProvider";
import { ECategory, IRecipe } from "../../@Types";
import { nanoid } from "nanoid";

const RecipeForm = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string[]>([]);
  const ingredientItem = useRef<HTMLInputElement>(null);
  const instructionItem = useRef<HTMLInputElement>(null);
  const { recipes, setRecipes } = useContext(RecipesContext);
  const handleAddingIngredient = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (ingredientItem.current && ingredientItem.current.value != "") {
      setIngredients((oldValue) => [
        ...oldValue,
        ingredientItem.current?.value!,
      ]);
    }
  };
  const handleAddingInstruction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (instructionItem.current && instructionItem.current.value != "") {
      setInstructions((oldValue) => [
        ...oldValue,
        instructionItem.current?.value!,
      ]);
    }
  };

  const handleRecipeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = nanoid();
    const title: string = e.currentTarget["Title"].value;
    const image: string = e.currentTarget["image"].value;
    const description: string = e.currentTarget["Desc"].value;
    const category: ECategory = e.currentTarget["cat"].value;

    const recipe: IRecipe = {
      id,
      title,
      image,
      description,
      category,
      ingredients,
      instructions,
    };
    setRecipes((oldValue) => [...oldValue, recipe]);
  };

  return (
    <div>
      <form className="Recipe-form" onSubmit={handleRecipeSubmit}>
        <label htmlFor="Title"></label>
        <input type="text" placeholder="Recipe title" id="Title" />
        <input type="text" placeholder="Recipe image link" id="image" />
        <input type="text" placeholder="Recipe description" id="Desc" />
        <div className="category">
          <select id="cat">
            <option value="">All</option>
            <option value={ECategory.BREAK_FAST}>Breakfast</option>
            <option value={ECategory.LUNCH}>Lunch</option>
            <option value={ECategory.DINNER}>Dinner</option>
            <option value={ECategory.DESSERT}>Dessert</option>
          </select>
        </div>
        <div className="ingredients">
          <input
            ref={ingredientItem}
            type="text"
            placeholder="Ingredient"
            id="ingredientItem"
          />
          <button
            type="submit"
            className="addIngredient"
            onClick={handleAddingIngredient}
          >
            Add
          </button>
        </div>
        <div className="ingredientList">
          <ol className="itemsList">
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {index + 1}. {ingredient}
              </li>
            ))}
          </ol>
        </div>
        <div className="instructions">
          <div className="ingredients">
            <input
              ref={instructionItem}
              type="text"
              placeholder="Ingredient"
              id="ingredientItem"
            />
            <button
              type="submit"
              className="addIngredient"
              onClick={handleAddingInstruction}
            >
              Add
            </button>
          </div>
          <div className="ingredientList">
            <ol style={{ listStyle: "none" }} className="itemsList">
              {instructions.map((instruction, index) => (
                <li key={index}>
                  {index + 1}. {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <input type="submit" value="Add Recipe" />
      </form>
    </div>
  );
};

export default RecipeForm;
