import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-center gap-6 text-sm md:text-lg lg:text-2xl mb-5 ">
      <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/">
        Home
      </NavLink>

      <NavLink
        className={(e) => (e.isActive ? "text-red-300" : "")}
        to="/about"
      >
        About
      </NavLink>

      <NavLink
        className={(e) => (e.isActive ? "text-red-300" : "")}
        to="/recipes"
      >
        Recipes
      </NavLink>

      <NavLink
        className={(e) => (e.isActive ? "text-red-300" : "")}
        to="/createrecipes"
      >
        Create-Recipes
      </NavLink>

      <NavLink
        className={(e) => (e.isActive ? "text-red-300" : "")}
        to="/favourite"
      >
        Favourite-Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;
