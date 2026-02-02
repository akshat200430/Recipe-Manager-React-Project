import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <div className="min-h-screen rounded-3xl mt-3 bg-gradient-to-br from-blue-950 via-slate-900 to-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          About This Project
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          This is a frontend-only recipe management application built using
          React. The purpose of this project is to practice real-world frontend
          concepts such as component-based architecture, routing, state
          management, and local storage handling.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Users can create recipes, view them on the recipe page, update or
          delete existing recipes, and add their favourite recipes for quick
          access — all without the need for a backend or authentication.
        </p>

        <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/20 shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">🛠 Tech Stack</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• React.js</li>
            <li>• React Router</li>
            <li>• Tailwind CSS</li>
            <li>• Responsive Design</li>
            <li>• Browser LocalStorage</li>
            <li>• Frontend-only Architecture</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">👋 About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Hi, I’m{" "}
            <span className="text-white font-semibold">Akshat Deshmukh</span>, a
            Computer Science student and frontend web development learner. I
            enjoy building practical projects that help me understand how real
            applications work and improve my problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
