import { useParams, useNavigate, Outlet, useMatch } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { RecipeContext } from "../context/RecipeContext";

const SingleRecipe = () => {
  const isEditing = useMatch("/recipes/details/:id/edit");
  const { id } = useParams();
  const { data, setdata } = useContext(RecipeContext);
  const navigate = useNavigate();
  const chek = useMatch("recipes/details/:id");

  const [confirmOpen, setConfirmOpen] = useState(false);

  const recipe = data.find((recipe) => recipe.id == id);

  const [fav, setfav] = useState(
    () => JSON.parse(localStorage.getItem("favourite")) || [],
  );

  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(fav));
  }, [fav]);

  if (!recipe) {
    return <p className="text-center text-xl">Recipe not found</p>;
  }

  const deletehandler = () => {
    const filtered = data.filter((r) => String(r.id) !== String(id));
    const filteredf = fav.filter((r) => String(r.id) !== String(id));

    setdata(filtered);
    setfav(filteredf);
    localStorage.setItem("recipes", JSON.stringify(filtered));
    localStorage.setItem("favourite", JSON.stringify(filteredf));
    setConfirmOpen(false);

    setTimeout(() => {
      navigate(chek ? "/recipes" : "/favourite");
    }, 300);
  };

  const favrecipe = () => {
    if (fav.find((f) => f.id == recipe.id)) return;
    setfav([...fav, recipe]);
  };

  const unfavrecipe = () => {
    setfav(fav.filter((f) => f.id !== recipe.id));
  };

  return (
    <div
      className="
        flex flex-col relative w-full
        border-2 border-gray-900
        rounded-2xl
        bg-blue-950 text-white
        shadow-[0_0_30px_rgba(59,130,246,0.8)]
        p-4 sm:p-5
        gap-4 sm:gap-5
        mt-16
      "
    >
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
        {recipe.title}{" "}
        <span className="bg-white/10 px-1 py-1 rounded-xl  font-thin scale-95">
          {recipe.Category}
        </span>
        <small className="font-thin block sm:inline">By.. {recipe.chef}</small>
        {fav.find((f) => f?.id == recipe.id) ? (
          <i
            onClick={unfavrecipe}
            className="text-3xl text-red-500 ri-poker-hearts-fill absolute cursor-pointer  right-[5%] top-[5%] sm:right-auto  "
          ></i>
        ) : (
          <i
            onClick={favrecipe}
            className="text-3xl text-red-500 ri-poker-hearts-line absolute cursor-pointer  right-[5%] top-[5%] sm:right-auto   "
          ></i>
        )}
      </h1>

      <img
        className="lg:w-[20%] mb:w-full h-48 sm:h-56 object-cover rounded-2xl"
        src={recipe.image}
        alt={recipe.title}
      />

      <p className="text-sm sm:text-base">{recipe.description}</p>
      <p className="text-sm sm:text-base">
        Instructions: {recipe.instructions}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button
          className="bg-gray-600 px-6 py-2 rounded-2xl hover:scale-105 transition"
          onClick={() => navigate(-1)}
        >
          <b>Back</b>
        </button>

        <button
          disabled={isEditing}
          className={`bg-gray-600 px-6 py-2 rounded-2xl transition ${
            isEditing ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
          }`}
          onClick={() => navigate("edit")}
        >
          <b>Edit</b>
        </button>

        <button
          className="bg-red-600 px-6 py-2 rounded-2xl hover:scale-105 transition"
          onClick={() => setConfirmOpen(true)}
        >
          <b>Delete</b>
        </button>
      </div>

      <div className="mt-4">
        <Outlet context={{ recipe }} />
      </div>

      {confirmOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl w-[90%] max-w-sm">
            <p className="text-lg font-semibold">
              Are you sure you want to delete this recipe?
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setConfirmOpen(false)}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
                onClick={deletehandler}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleRecipe;
