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
        <div className="bg">
          <svg
            width="700"
            height="250"
            viewBox="0 0 700 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 235.849C0 105.593 105.593 0 235.849 0H685.849C693.664 0 700 6.33559 700 14.1509V14.1509C700 144.407 594.407 250 464.151 250H14.1509C6.33559 250 0 243.664 0 235.849V235.849Z"
              fill="#F4AF00"
            />
            <path
              d="M0 235.849C0 105.593 105.593 0 235.849 0H685.849C693.664 0 700 6.33559 700 14.1509V14.1509C700 144.407 594.407 250 464.151 250H14.1509C6.33559 250 0 243.664 0 235.849V235.849Z"
              fill="#FF0101"
              fill-opacity="0.21"
            />
          </svg>
        </div>
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
