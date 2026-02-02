import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, description, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="duration-150 hover:scale-105  w-48 rounded-xl overflow-hidden shadow-md bg-white block"
    >
      <div className="h-28 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-2 bg-white">
        <h1 className="text-sm font-semibold text-black leading-tight">
          {title}
        </h1>

        <small className="text-xs text-gray-500 block">{chef}</small>

        <p className="text-xs text-gray-600 mt-1">
          {description.slice(0, 50)}...
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;
