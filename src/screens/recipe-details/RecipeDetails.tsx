import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();

  return (
    <div>
      RecipeDetails
      <br />
      {id}
    </div>
  );
};

export default RecipeDetails;
