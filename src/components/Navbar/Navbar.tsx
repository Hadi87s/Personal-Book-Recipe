import { Link } from "react-router-dom";
import "./navbar.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className={`m-5 ${scrolled ? `navbar scroll` : `navbar`}`}>
        <div className="logo">Logo</div>

        <ul className="navList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipe">Recipes</Link>
          </li>
          <li>
            <Link to="/add-recipe">Add Recipe</Link>
          </li>
        </ul>
        <div className="login">
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
