import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";
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

        <div className="accordions">
          <Accordion>
            <AccordionSummary>
              <Typography style={{ fontWeight: "600", fontFamily: "Fredoka" }}>
                Ingredients
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                {recipe.ingredients.map((item, index) => {
                  return (
                    <Typography
                      style={{ fontFamily: "Fredoka" }}
                      className="listOfIngredients"
                    >
                      {index + 1}. {item}
                    </Typography>
                  );
                })}
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography style={{ fontWeight: "600", fontFamily: "Fredoka" }}>
                Instructions
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                {recipe.instructions.map((item, index) => {
                  return (
                    <Typography
                      style={{ fontFamily: "Fredoka" }}
                      className="listOfInstructions"
                    >
                      {index + 1}. {item}
                    </Typography>
                  );
                })}
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Details;
