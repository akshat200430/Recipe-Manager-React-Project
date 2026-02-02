import { useState, createContext } from "react";

export const RecipeContext = createContext(null);

const defaultRecipe = [
  {
    id: "r001",
    title: "Paneer Butter Masala (Example)",
    chef: "Akshat Deshmukh",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JfZHtD_jlggLqhDlthd7Jg2o4gt7OrWH7w&s",
    description:
      "Rich and creamy paneer curry cooked in a tomato butter gravy.",
    instructions:
      "Saute onions and tomatoes, blend into paste, add butter, cream, spices, and paneer. Cook until thick.",
    category: "Lunch",
  },
];

const RecipeProvider = (props) => {
  const [data, setdata] = useState(() => {
    try {
      const stored = localStorage.getItem("recipes");

      if (!stored) return defaultRecipe;

      const parsed = JSON.parse(stored);

      return parsed.length > 0 ? parsed : defaultRecipe;
    } catch (err) {
      console.error("Invalid recipes in localStorage", err);
      localStorage.removeItem("recipes");
      return defaultRecipe;
    }
  });

  return (
    <RecipeContext.Provider value={{ data, setdata }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
