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
      <div className="name">{recipe.name}</div>
      <div className="desc">{recipe.description}</div>
    </div>
  );
};

export default Recipe;
