import "../screens.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Example from "../../components/HorizontalScroll/HorizontalScroll";
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
          <h1>Recipe Book</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis illum consequuntur nulla, dolore sint maiores delectus
            aliquam non id tenetur tempora nesciunt rerum corrupti deleniti ut
            quidem eos? Iste, accusamus.
          </p>
          <div className="blob"></div>
        </div>
        <div className="wigglingSVG"></div>
      </div>
      <Example />
    </motion.div>
  );
};

export default Home;
