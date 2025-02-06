import { motion } from "framer-motion";
import RecipeForm from "../../components/RecipeForm/RecipeForm";

const AddRecipe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <RecipeForm />
    </motion.div>
  );
};

export default AddRecipe;
