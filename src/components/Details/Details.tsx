import { IRecipe } from "../../@Types";
import "./details.css";
interface IProps {
  recipe: IRecipe;
}

const Details = ({ recipe }: IProps) => {
  return (
    <div className="holder">
      <div className="hero">
        <div className="recipe-image">
          <div className="cat">{recipe.category}</div>
          <img src={recipe.image} alt="" />
        <div className="title">
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
        </div>
        </div>
      </div>
      <div className="lists">
        <ul className="ingredients">
          <h3>Recipe Ingredients:</h3>
          {recipe.ingredients.map((item) => {
            return <li className="listOfIngredients">{item}</li>;
          })}
        </ul>
        <ol className="instructions">
          <h3>Recipe Instructions:</h3>
          {recipe.instructions.map((item) => {
            return <li className="listOfInstructions">{item}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default Details;
