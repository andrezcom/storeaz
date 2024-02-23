import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const aStyle = " text-cyan-900";
  return (
    <nav className="flex justify-between items-center bg-cyan-300 px-4">
      <ul className="flex items-center gap-2">
        <li className="p-5 font-bold">
          <Link to="/">StoreAZ</Link>
        </li>
        <li>
          <NavLink
            to="/account"
            className={({ isActive }) => (isActive ? aStyle : undefined)}
          >
            Herramientas
          </NavLink>
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
      <ul className="flex items-center gap-2">
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
