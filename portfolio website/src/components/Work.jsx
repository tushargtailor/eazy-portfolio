import React from "react";
import project1 from "../assets/p1.jpg";
import project2 from "../assets/p2.jpg";
import project3 from "../assets/p3.jpg";

const Work = () => {
  const projects = [
    {
      id: 11,
      title: "Blog App",
      description:
        "A blog app where user can create a post and read pots With Authentication.",
      image: project1,
      link: "https://mega-blogs.netlify.app/",
    },
    {
      id: 2,
      title: "Shopon",
      description: "SHOPON a E-commerce Website!",
      image: project2,
      link: "https://tushar-shopon.netlify.app/",
    },
    {
      id: 3,
      title: "Image Search Engine",
      description: "Image Gallery wher you can find 4 Million+ Images!",
      image: project3,
      link: "https://tushar-image-search-engine.netlify.app/",
    },
  ];

  return (
    <div id="work" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl underline mb-12 font-bold text-center">
          Recent Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              className="bg-gray-600 shadow-lg rounded-lg overflow-hidden"
              key={project.id}
            >
              <img className="w-full h-48 object-cover" src={project.image} />
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <button className="border-2 border-white text-gray-300 rounded-full px-4 py-2 hover:bg-gray-200 hover:text-black transition">

                  Live

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
