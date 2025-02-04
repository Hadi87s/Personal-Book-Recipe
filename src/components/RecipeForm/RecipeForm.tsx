import { useRef, useState } from "react";
import "./recipe-form.css";

const RecipeForm = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const ingredientItem = useRef<HTMLInputElement>(null);
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
  return (
    <div>
      <form className="Recipeform">
        <label htmlFor="Title"></label>
        <input type="text" placeholder="Recipe title" id="Title" />
        <input type="text" placeholder="Recipe Image Link" />
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
              <li key={index}>{ingredient}</li>
            ))}
          </ol>
        </div>
        
      </form>
    </div>
  );
};

export default RecipeForm;
