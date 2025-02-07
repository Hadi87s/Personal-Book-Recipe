import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const y = window.scrollY;
    if (y > 55) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${scrolled ? `navbar scroll` : `navbar`}`}>
      <div
        onClick={() => {
          navigate("/");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className="chef-logo"
      ></div>

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
  );
};

export default Navbar;
