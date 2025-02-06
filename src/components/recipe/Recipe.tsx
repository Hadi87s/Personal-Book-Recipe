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
        <div className="catg">{recipe.category}</div>
      </div>
      <div className="name">{recipe.title}</div>
      <div className="desc">{recipe.description}</div>
      <div className="details">
        <Link to={`/recipe/${recipe.id}`}>Check Details</Link>
      </div>
    </div>
  );
};

export default Recipe;
