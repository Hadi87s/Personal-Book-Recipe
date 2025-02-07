import { useContext, useRef, useState } from "react";
import { RecipesContext } from "../../providers/recipesProvider";
import { ECategory, IRecipe } from "../../@Types";
import { nanoid } from "nanoid";
import "../../screens/screens.css";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  List,
  ListItem,
  Typography,
  Divider,
} from "@mui/material";

const RecipeForm = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string[]>([]);
  const ingredientItem = useRef<HTMLInputElement>(null);
  const instructionItem = useRef<HTMLInputElement>(null);
  const { setRecipes } = useContext(RecipesContext);

  const handleAddingIngredient = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (ingredientItem.current?.value) {
      setIngredients((old) => [...old, ingredientItem.current!.value]);
      ingredientItem.current!.value = "";
    }
  };

  const handleAddingInstruction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (instructionItem.current?.value) {
      setInstructions((old) => [...old, instructionItem.current!.value]);
      instructionItem.current!.value = "";
    }
  };

  const handleRecipeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const recipe: IRecipe = {
      id: nanoid(),
      title: formData.get("title") as string,
      image: formData.get("image") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as ECategory,
      ingredients,
      instructions,
    };

    setRecipes((old: IRecipe[]) => [...old, recipe]);
    // Reset form
    setIngredients([]);
    setInstructions([]);
  };

  const whiteStyle = {
    color: "white",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        borderRadius: "8px", // Adjust border radius here
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
      <div className="rForm"></div>
      <Box
        component="form"
        onSubmit={handleRecipeSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <TextField
          name="title"
          label="Recipe Title"
          variant="outlined"
          fullWidth
          required
          sx={{
            ...whiteStyle,
            "& .MuiInputLabel-root": {
              color: "white", // Set initial label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#FFE3B9", // Set focused label color to orange
            },
            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
              borderColor: "#FFE3B9", // Set the border color when focused to orange
            },
          }}
          InputLabelProps={{ sx: { color: "white" } }}
        />

        <TextField
          name="image"
          label="Image URL"
          variant="outlined"
          fullWidth
          required
          sx={{
            ...whiteStyle,
            "& .MuiInputLabel-root": {
              color: "white", // Set initial label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#FFE3B9", // Set focused label color to orange
            },
            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
              borderColor: "#FFE3B9", // Set the border color when focused to orange
            },
          }}
          InputLabelProps={{ sx: { color: "white" } }}
        />

        <TextField
          name="description"
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          required
          sx={{
            ...whiteStyle,
            "& .MuiInputLabel-root": {
              color: "white", // Set initial label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#FFE3B9", // Set focused label color to orange
            },
            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
              borderColor: "#FFE3B9", // Set the border color when focused to orange
            },
          }}
          InputLabelProps={{ sx: { color: "white" } }}
        />

        <Select
          name="category"
          defaultValue=""
          variant="outlined"
          fullWidth
          required
          displayEmpty
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // Initial border color set to white
              },
              "&:hover fieldset": {
                borderColor: "white", // Keep the border white when hovering
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FFE3B9 !important", // Change border color to #FFE3B9 when focused
              },
            },
            "& .MuiSelect-select": {
              color: "white", // Text color inside the select
            },
            "& .MuiInputLabel-root": {
              color: "white", // Initial label color
              "&.Mui-focused": {
                color: "#FFE3B9 !important", // Change label color to #FFE3B9 when focused
              },
            },
            "& .MuiSelect-icon": {
              color: "white", // Set the select icon color to white
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "#FCAF3Cf1",
                "& .MuiMenuItem-root": {
                  color: "white",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                },
              },
            },
          }}
        >
          <MenuItem value="" disabled>
            Select Category
          </MenuItem>
          <MenuItem value="BREAK_FAST">Breakfast</MenuItem>
          <MenuItem value="LUNCH">Lunch</MenuItem>
          <MenuItem value="DINNER">Dinner</MenuItem>
          <MenuItem value="DESSERT">Dessert</MenuItem>
        </Select>

        <Divider
          sx={{
            color: "white",
            "&::before, &::after": {
              borderColor: "white",
            },
          }}
        >
          Ingredients
        </Divider>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            inputRef={ingredientItem}
            label="Add Ingredient"
            variant="outlined"
            fullWidth
            sx={{
              ...whiteStyle,
              "& .MuiInputLabel-root": {
                color: "white", // Set initial label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#FFE3B9", // Set focused label color to orange
              },
              "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                borderColor: "#FFE3B9", // Set the border color when focused to orange
              },
            }}
            InputLabelProps={{ sx: { color: "white" } }}
          />
          <Button
            variant="contained"
            onClick={handleAddingIngredient}
            type="button"
            sx={{
              bgcolor: "#FCAF3C",
              color: "white",
              border: "2px solid white",
              borderRadius: "10px",
              "&:hover": {
                bgcolor: "rgba(252, 175, 60, 0.6)",
                borderColor: "#FCAF3C",
              },
            }}
          >
            Add
          </Button>
        </Box>

        <List
          dense
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            borderRadius: "8px", // Adjust border radius here
            color: "white",
          }}
        >
          {ingredients.map((ingredient, index) => (
            <ListItem key={index}>
              <Typography variant="body2" sx={{ color: "white" }}>
                {index + 1}. {ingredient}
              </Typography>
            </ListItem>
          ))}
        </List>

        <Divider
          sx={{
            color: "white",
            "&::before, &::after": {
              borderColor: "white",
            },
          }}
        >
          Instructions
        </Divider>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            inputRef={instructionItem}
            label="Add Instruction"
            variant="outlined"
            fullWidth
            multiline
            sx={{
              ...whiteStyle,
              "& .MuiInputLabel-root": {
                color: "white", // Set initial label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#FFE3B9", // Set focused label color to orange
              },
              "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                borderColor: "#FFE3B9", // Set the border color when focused to orange
              },
            }}
            InputLabelProps={{ sx: { color: "white" } }}
          />
          <Button
            variant="contained"
            onClick={handleAddingInstruction}
            type="button"
            sx={{
              bgcolor: "#FCAF3C",
              color: "white",
              border: "2px solid white",
              borderRadius: "10px",
              "&:hover": {
                bgcolor: "rgba(252, 175, 60, 0.6)",
                borderColor: "#FCAF3C",
              },
            }}
          >
            Add
          </Button>
        </Box>

        <List
          dense
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            borderRadius: "8px", // Adjust border radius here
            color: "white",
          }}
        >
          {instructions.map((instruction, index) => (
            <ListItem key={index}>
              <Typography variant="body2" sx={{ color: "white" }}>
                <strong>{index + 1}.</strong> {instruction}
              </Typography>
            </ListItem>
          ))}
        </List>

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#FCAF3C",
            color: "white",
            border: "2px solid white",
            borderRadius: "10px",
            "&:hover": {
              bgcolor: "rgba(252, 175, 60, 0.6)",
              borderColor: "#FCAF3C",
            },
          }}
        >
          Add Recipe
        </Button>
      </Box>
    </Box>
  );
};

export default RecipeForm;
