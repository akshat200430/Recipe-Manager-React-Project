import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { RecipeContext } from "../context/RecipeContext";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Createrecipes = () => {
  const { register, handleSubmit, reset } = useForm();
  const { data, setdata } = useContext(RecipeContext);
  const navigate = useNavigate();

  const submithandler = (recipe) => {
    recipe.id = nanoid();
    const copyarray = [...data, recipe];
    setdata(copyarray);
    localStorage.setItem("recipes", JSON.stringify(copyarray));

    toast.success("recipe created");
    reset();
    navigate("/recipes");
  };

  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log(" unmounted");
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit(submithandler)}
      className="
          max-w-xl mx-auto mt-6
    bg-gradient-to-br from-blue-950 via-slate-900 to-black
    backdrop-blur-xl
    border border-white/20
    p-6 sm:p-8
    rounded-2xl
    shadow-[0_0_40px_rgba(59,130,246,0.25)]
    grid gap-3
    font-semibold
    text-white
      "
    >
      <h2 className="text-2xl font-semibold text-white mb-2 text-center">
        Create Recipe
      </h2>

      <input
        className="
          border-b border-gray-300
          outline-none
          p-2
          focus:border-blue-500
          transition
                 text-white

        "
        type="url"
        {...register("image")}
        placeholder="Image URL"
      />

      <input
        className="
          border-b border-gray-300
          outline-none
          p-2
          focus:border-blue-500
          transition
                   text-white

        "
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
      />

      <input
        className="
          border-b border-gray-300
          outline-none
          p-2
          focus:border-blue-500
          transition
         text-white
        "
        {...register("chef")}
        type="text"
        placeholder="Chef name"
      />

      <textarea
        className="
          border border-gray-300
          outline-none
          p-2
          rounded-lg
          resize-none
          focus:border-blue-500
          transition
                 text-white

        "
        {...register("description")}
        placeholder="Recipe Description"
        rows={3}
      />

      <textarea
        className="
          border border-gray-300
          outline-none
          p-2
          rounded-lg
          resize-none
          focus:border-blue-500
          transition
                   text-white

        "
        {...register("instructions")}
        placeholder="Write ingredients separated by commas"
        rows={4}
      />

      <select
        className="
          border border-gray-300
          outline-none
          p-2
          rounded-lg
          focus:border-blue-500
          transition
                  text-red-600

        "
        {...register("Category")}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Beverages">Beverages</option>
      </select>

      <button
        className="
          mt-4
          bg-blue-600
         text-white
          rounded-xl
          hover:bg-blue-700
          hover:scale-105
          transition
        "
      >
        Save Recipe
      </button>
    </form>
  );
};

export default Createrecipes;
