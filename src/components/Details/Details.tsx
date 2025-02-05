import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";
import { IRecipe } from "../../@Types";
import "./details.css";
import { motion } from "framer-motion";

interface IProps {
  recipe: IRecipe;
}

const Details = ({ recipe }: IProps) => {
  return (
    <div className="holder">
      <div className="hero">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="recipe-image">
            <div className="cat">{recipe.category}</div>
            <img src={recipe.image} alt="" />
            <div className="title">
              <h1>{recipe.title}</h1>
              <p>{recipe.description}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: +100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="accordions">
            <Accordion>
              <AccordionSummary>
                <Typography
                  style={{ fontWeight: "600", fontFamily: "Fredoka" }}
                >
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
                <Typography
                  style={{ fontWeight: "600", fontFamily: "Fredoka" }}
                >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Details;
