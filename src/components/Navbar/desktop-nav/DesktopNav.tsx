import  { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
const DesktopNav = () => {
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
  
    const links = [
        {
          href:"/",
          name:"Home"
        },
        {
          href:"/recipe",
          name:"Recipes"
        },
        {
          href:"/add-recipe",
          name:"Add Recipe"
        }
    ];
    
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
        {links.map((link, index) => (
          <li key={index}>
            <NavLink to={link.href}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="login">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default DesktopNav
