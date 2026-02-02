import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipes from "../pages/Recipes";
import Createrecipes from "../pages/Createrecipes";
import SingleRecipe from "../pages/SingleRecipe";
import Edit from "../pages/Edit";
import Favourite from "../pages/Favourite";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<SingleRecipe />}>
        <Route path="edit" element={<Edit />} />
      </Route>
      <Route path="/createrecipes" element={<Createrecipes />} />
      <Route path="/favourite" element={<Favourite />} />
    </Routes>
  );
};

export default Mainroutes;
