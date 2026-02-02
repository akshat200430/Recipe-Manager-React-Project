import { RecipeContext } from "../context/RecipeContext";
import { useContext, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const { data } = useContext(RecipeContext);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log(" unmounted");
    };
  }, []);
  if (data.length === 0)
    return (
      <div>
        <h1 className="text-9xl text-red-500 mt-10 mb-3">No Recipes</h1>
        <button
          onClick={() => navigate("/createrecipes")}
          className="bg-blue-500 p-5 rounded-3xl font-bold text-3xl"
        >
          Create recipe
        </button>
      </div>
    );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 mt-16  place-items-center">
      {data.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;
