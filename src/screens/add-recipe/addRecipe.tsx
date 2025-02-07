import { motion } from "framer-motion";
import RecipeForm from "../../components/RecipeForm/RecipeForm";

const AddRecipe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <RecipeForm />
    </motion.div>
  );
};

export default AddRecipe;
