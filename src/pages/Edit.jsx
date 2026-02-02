import { useForm } from "react-hook-form";
import { RecipeContext } from "../context/RecipeContext";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { register, handleSubmit, reset } = useForm();
  const { data, setdata } = useContext(RecipeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [fav, setfav] = useState(
    () => JSON.parse(localStorage.getItem("favourite")) || [],
  );

  const recipe = data.find((r) => r.id === id);
  const index = data.findIndex((r) => r.id === id);

  const indexf = fav.findIndex((r) => r.id === id);

  useEffect(() => {
    if (recipe) {
      reset({
        title: recipe.title,
        chef: recipe.chef,
        image: recipe.image,
        description: recipe.description,
        instructions: recipe.instructions,
        Category: recipe.Category,
      });
    }
  }, [recipe, reset]);

  useEffect(() => {
    const form = document.getElementById("edit-form");
    requestAnimationFrame(() => {
      form?.classList.add("edit-show");
    });
  }, []);

  if (!recipe) {
    return <p className="text-center">Loading...</p>;
  }

  const goBackSlow = () => {
    const form = document.getElementById("edit-form");
    form?.classList.remove("edit-show");
    form?.classList.add("edit-hide");

    setTimeout(() => {
      navigate(-1);
    }, 700);
  };

  const updatehandler = (formData) => {
    const copy = [...data];
    copy[index] = { ...copy[index], ...formData };
    setdata(copy);
    localStorage.setItem("recipes", JSON.stringify(copy));

    if (indexf !== -1) {
      const copyf = [...fav];
      copyf[indexf] = { ...copyf[indexf], ...formData };
      setfav(copyf);
      localStorage.setItem("favourite", JSON.stringify(copyf));
    }

    toast.success("Recipe Updated");
    goBackSlow();
  };

  return (
    <form
      id="edit-form"
      className="edit-form ml-4 w-[60%] grid gap-0.5"
      onSubmit={handleSubmit(updatehandler)}
    >
      <input
        className="border-b outline-0 p-2"
        type="url"
        {...register("image")}
        placeholder="Enter image url"
      />

      <input
        className="border-b outline-0 p-2"
        {...register("title")}
        placeholder="Recipe Title"
      />

      <input
        className="border-b outline-0 p-2"
        {...register("chef")}
        placeholder="Chef name"
      />

      <textarea
        className="border-b outline-0 p-1"
        {...register("description")}
        placeholder="Recipe Description"
      />

      <textarea
        className="border-b outline-0 p-1"
        {...register("instructions")}
        placeholder="//Write ingredients separated by commas"
      />

      <select
        className="
          border border-gray-300
          outline-none
          p-2
          rounded-lg
          focus:border-blue-500
          transition
                   text-red-400
                   font-bold
        "
        {...register("Category")}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Beverages">Beverages</option>
      </select>

      <button className="mt-5 bg-blue-600 px-4 py-2 rounded-2xl">
        <b>Update recipe</b>
      </button>
    </form>
  );
};

export default Edit;
