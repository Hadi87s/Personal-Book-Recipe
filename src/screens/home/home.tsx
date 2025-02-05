import "../screens.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
const Home = () => {
  useEffect(() => {
    document.title = "Recipe World"; // Set the document title for the page
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gray-900 text-white"
    >
      Home Page
    </motion.div>
  );
};

export default Home;
