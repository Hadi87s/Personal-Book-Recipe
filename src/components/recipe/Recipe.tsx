import { Link } from "react-router-dom";
import { IRecipe } from "../../@Types";
import "./recipe.css";
interface IProps {
  recipe: IRecipe;
}

const Recipe = ({ recipe }: IProps) => {
  return (
    <div className="card">
      <div className="image">
        <img src={recipe.image} alt="" />
      </div>
      <div className="name">
        <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
      </div>
      <div className="desc">{recipe.description}</div>
    </div>
  );
};

export default Recipe;
