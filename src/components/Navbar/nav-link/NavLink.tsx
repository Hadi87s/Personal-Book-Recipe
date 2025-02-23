import { Link, useLocation } from 'react-router-dom'

interface IProps {
    to: string;
    children:React.ReactNode;
}

const NavLinkloc = ({to, children}: IProps) => {
  const location = useLocation();
  return (
    <li>
    <Link className={`${location.pathname === to ? "border-b-2 rounded-b-[2px]" : ""} p-2 font-[500] text-lg hover:text-black`} to={to}>{children}</Link>
    </li>
  )
}

export default NavLinkloc
