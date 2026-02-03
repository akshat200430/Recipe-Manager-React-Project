import { Link } from "react-router-dom";

const Home = () => {
  return (
    
    <div className="min-h-screen rounded-3xl mt-3 bg-gradient-to-br from-blue-950 via-slate-900 to-black text-white px-6 py-16">


      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          🍽️ Your Personal Recipe Manager
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl mb-8">
          A frontend-only React application to create, manage, and save your
          favorite recipes using browser local storage.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/recipes"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            Explore Recipes
          </Link>

          <Link
            to="/createrecipes"
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            Create Recipe
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">📝 Create Recipes</h3>
          <p className="text-gray-300">
            Add recipes with title, chef name, description, instructions, and
            category.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">✏️ Edit & Delete</h3>
          <p className="text-gray-300">
            Update recipe details anytime or remove recipes you no longer need.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">❤️ Favourite Recipes</h3>
          <p className="text-gray-300">
            Save your favourite recipes and access them quickly from one place.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6">🛠 Tech Stack</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-white/10 px-5 py-2 rounded-xl">React.js</span>
          <span className="bg-white/10 px-5 py-2 rounded-xl">React Router</span>
          <span className="bg-white/10 px-5 py-2 rounded-xl">Tailwind CSS</span>
          <span className="bg-white/10 px-5 py-2 rounded-xl">LocalStorage</span>
          <span className="bg-white/10 px-5 py-2 rounded-xl">Responsive</span>
          <span className="bg-white/10 px-5 py-2 rounded-xl">
            Frontend Only
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">👋 About Me</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Hi, I’m{" "}
          <span className="text-white font-semibold">Akshat Deshmukh</span>, a
          Computer Science student and frontend web development learner. I built
          this project to practice React fundamentals, routing,responsive, state
          management, and real-world UI logic using local storage.
        </p>
      </div>
    </div>
  );
};

export default Home;
