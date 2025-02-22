import { Link } from 'react-router-dom'

interface IProps {
    to: string;
    name:React.ReactNode;
}

const NavLink = (props: IProps) => {
  return (
    <li>
    <Link to={props.to}>{props.name}</Link>
    </li>
  )
}

export default NavLink
