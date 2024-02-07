import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between">
      <ul className="flex items-center">
        <li>
          <Link to="/">StoreAZ</Link>
        </li>
        <li>
          <Link to="/account">Herramientas</Link>
        </li>
        <li>
          <Link to="/myorder">Equipos</Link>
        </li>
        <li>
          <Link to="/orderes">Motos</Link>
        </li>
        <li>
          <Link to="/signin">Accesorios</Link>
        </li>
      </ul>
      <ul className="flex items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/myorder">My Order</Link>
        </li>
        <li>
          <Link to="/orderes">My Orders</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
