import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
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
      <div>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
