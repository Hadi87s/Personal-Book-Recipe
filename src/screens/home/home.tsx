import "../screens.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Example from "../../components/HorizontalScroll/HorizontalScroll";
import ParallaxSection from "../../components/parallax-section/ParallaxSection";
import AdvancedParallaxSection from "../../components/advanced-parallax/AdvancedParallaxSection";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Recipe World"; // Set the document title for the page
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="topLevel"
    >
      <div className="container">
        <div className="text mx-20">
          <motion.div
            initial={{ x: -40 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="max-w-[600px] font-bold">
              Discover Delicious Recipes and Culinary Secrets!
            </h1>
            <p>
              Explore our exclusive recipes, crafted by top chefs for food
              enthusiasts.
            </p>
            <Link
              className="flex justify-center p-3 border-amber-600 border-2 rounded-2xl bg-amber-400 my-15 md:w-50 sm:w-40 w-35 transition duration-150 hover:scale-110 mx-auto hover:ring-2"
              to="/recipe"
            >
              <span className="md:text-3xl sm:text-2xl text-base ">
                Get Started
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
      <Example />
      <ParallaxSection />
      <AdvancedParallaxSection />
      <Footer />
    </motion.div>
  );
};

export default Home;
