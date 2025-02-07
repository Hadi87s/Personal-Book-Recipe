import "../screens.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Example from "../../components/HorizontalScroll/HorizontalScroll";
import ParallaxSection from "../../components/parallax-section/ParallaxSection";
import AdvancedParallaxSection from "../../components/advanced-parallax/AdvancedParallaxSection";
const Home = () => {
  useEffect(() => {
    document.title = "Recipe World"; // Set the document title for the page
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="text">
          <h1>Discover Delicious Recipes and Culinary Secrets!</h1>
          <p>
            Explore our exclusive recipes, crafted by top chefs for food
            enthusiasts.
          </p>
          <div className="blob"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 1000, y: -1000 }}
          animate={{ opacity: 1, x: 400, y: -300 }}
          transition={{ duration: 0.8 }}
        >
          <div className="wigglingSVG"></div>
        </motion.div>
      </div>
      <Example />
      <ParallaxSection />
      <AdvancedParallaxSection />
    </motion.div>
  );
};

export default Home;
