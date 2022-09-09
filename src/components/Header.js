import { NavLink } from "react-router-dom";


const Header = () => {
  

  return (
    <header className="bg-indigo-600 ">
      <nav
        className="flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <ul className="flex w-full items-center justify-evenly border-b border-indigo-500 py-6 lg:border-none">
          <li className="text-base font-medium text-white hover:text-indigo-50">
            <NavLink  to="Restricted">
              Restricted
            </NavLink>
          </li>
          <li className="text-base font-medium text-white hover:text-indigo-50">
            <NavLink  to="/">
              Login or Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
