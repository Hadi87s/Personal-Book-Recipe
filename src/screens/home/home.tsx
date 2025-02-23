import "../screens.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Example from "../../components/HorizontalScroll/HorizontalScroll";
import ParallaxSection from "../../components/parallax-section/ParallaxSection";
import AdvancedParallaxSection from "../../components/advanced-parallax/AdvancedParallaxSection";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import ScrollVelocity from "../../components/scroll-velocity/ScrollVelocity";

const Home = () => {
  useEffect(() => {
    document.title = "Recipe World"; // Set the document title for the page
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="topLevel"
    >
      <div className="container mx-auto">
        <div className="text mx-auto flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity:0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-4"
          >
            <h1 className="font-bold">
              Discover Delicious Recipes and Culinary Secrets!
            </h1>
            <p>
              Explore our exclusive recipes, crafted by top chefs for food
              enthusiasts.
            </p>
           
          </motion.div>
        </div>
        <Link
              className="flex justify-center p-3  rounded-2xl h-fit bg-amber-400 my-15 md:w-50 sm:w-40 w-35 transition duration-150 hover:scale-110 mx-auto outline-2 hover:outline-offset-2"
              to="/recipe"
            >
              <span className="md:text-3xl sm:text-2xl text-base ">
                Get Started
              </span>
            </Link>
      </div>
      <ScrollVelocity
        texts={['Discover Delicious Recipes from Around the World!', 'Cooking Made Easy – Explore, Cook, Enjoy!']} 
        velocity={100} 
        className="custom-scroll-text my-4"
        
      />
      <Example />
      <ParallaxSection />
      <AdvancedParallaxSection />
      <Footer />
    </motion.div>
  );
};

export default Home;
