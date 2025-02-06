import { Link } from "react-router-dom";
import "./navbar.css";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">Logo</div>

      <motion.div
        initial={{ opacity: 0, y: -400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gray-900 text-white"
      >
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
      </motion.div>
      <div className="login">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
