import { useContext, useEffect, useState } from "react";
import Recipe from "../../components/Recipe/Recipe";
import "../screens.css";
import { RecipesContext } from "../../providers/recipesProvider";
import { useSearchParams } from "react-router-dom";
import { ECategory, IRecipe } from "../../@Types";
import { motion } from "framer-motion";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

const Recipes = () => {
  const { recipes } = useContext(RecipesContext);
  const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>(recipes);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const search = params.get("search");
    const cat = params.get("cat");
    if (search) {
      setFilteredRecipes(
        recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else if (cat) {
      setFilteredRecipes(recipes.filter((recipe) => recipe.category === cat));
    } else {
      setFilteredRecipes(recipes);
    }
  }, [params]);

  const handleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    setParams(params);
  };

  const handleCategoryFilter = (e: SelectChangeEvent<string>) => {
    const query = e.target.value;
    console.log(query);

    if (query) {
      params.set("cat", query);
    } else {
      params.delete("cat");
    }
    setParams(params);
  }; // refactor those two functions into one :)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="waves"></div>
      <div className="filter">
        <TextField
          type="text"
          label="Search"
          variant="outlined"
          onChange={handleSearchFilter}
          fullWidth
          autoComplete="off"
          sx={{
            input: { color: "white" }, // Text color inside the input
            label: { color: "white" }, // Label color
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // Border color
              },
              "&:hover fieldset": {
                borderColor: "white", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // Border color when focused
              },
            },
          }}
        />

        <FormControl fullWidth variant="outlined">
          <InputLabel sx={{ color: "white" }}>Category</InputLabel>
          <Select
            label="Category"
            onChange={handleCategoryFilter}
            defaultValue=""
            fullWidth
            sx={{
              color: "white",
              borderColor: "white",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              // Customizing the arrow icon color
              "& .MuiSelect-icon": {
                color: "white", // Change the arrow color to white
              },
            }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={ECategory.BREAK_FAST}>Breakfast</MenuItem>
            <MenuItem value={ECategory.LUNCH}>Lunch</MenuItem>
            <MenuItem value={ECategory.DINNER}>Dinner</MenuItem>
            <MenuItem value={ECategory.DESSERT}>Dessert</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="recipeContainer">
        {filteredRecipes.map((recipe, index) => (
          <Recipe recipe={recipe} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Recipes;
