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
        </div>
        <div className="title">
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <h3>Recipe Ingredients:</h3>
          <ul className="ingredients">
            {recipe.ingredients.map((item) => {
              return <li className="listOfIngredients">{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="lists">
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
