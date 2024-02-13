import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-cyan-300  p-3">
      <ul className="flex items-center gap-2">
        <li className="p-5 font-bold">
          <Link to="/">StoreAZ</Link>
        </li>
        <li>
          <NavLink
            to="/account"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                textDecoration: isActive ? "overline #212F3C" : "",
                color: isPending ? "red" : "#212F3C",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
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
