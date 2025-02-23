import  { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import NavLinkloc from '../nav-link/NavLink';
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
    <nav className={`${scrolled ? `navbar scroll` : `navbar`} min-w-[90%]`}>
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

      <ul className="hidden md:flex justify-center gap-x-10 items-center ">
        {links.map((link, index) => (
            <NavLinkloc key={index}  to={link.href}>
              {link.name}
            </NavLinkloc>
        ))}
      </ul>
      <div className="login hidden md:block">
        <Link to="/login">Login</Link>
      </div>
      <div className='block md:hidden'>Menu</div>
    </nav>
  )
}

export default DesktopNav
