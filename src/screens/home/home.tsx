import "../screens.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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
      <div className="container">
        <div className="text">
          <h1>Recipe Book</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis illum consequuntur nulla, dolore sint maiores delectus
            aliquam non id tenetur tempora nesciunt rerum corrupti deleniti ut
            quidem eos? Iste, accusamus.
          </p>
        </div>

        <div className="wigglingSVG">
          {/* <DotLottieReact
            src="https://lottie.host/b95dab2b-84c2-4460-bfee-bbc91bb15800/eCTlNWGlsg.lottie"
            loop
            autoplay
          /> */}
          <img
            src="../../../public/recipe.svg"
            width="270px"
            alt="recipe-book-svg"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
