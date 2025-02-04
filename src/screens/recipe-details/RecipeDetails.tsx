import React from "react";
import { useLocation, useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { name } = useParams();
  const location = useLocation();
  console.log(name);
  console.log(location.pathname);

  return (
    <div>
      RecipeDetails
      {name}
    </div>
  );
};

export default RecipeDetails;
