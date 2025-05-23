import { useState } from "react";

const MyProject = () => {
  const [projectList] = useState([
    {
      title: "Shopping_Cart",
      desc: `A robust shopping cart app using Spring MVC and Hibernate, enabling users to browse products, manage cart items, and place orders.`,
      icon: "fa-cart-shopping",
      id: 1,
      actionButton: {
        title: "Click Me",
        link: "https://github.com/RishavKumar8578/shoppingcart_application",
      },
    },
    {
      title: "Cric_BuzzInformer",
      desc: `A CRUD-based cricket live score web app using Spring Boot, Hibernate, and Jsoup, with MySQL integration.`,
      icon: "fa-baseball-bat-ball",
      id: 2,
      actionButton: {
        title: "Click Me",
        link: "https://github.com/RishavKumar8578/cric_buzz_info",
      },
    },
    {
      title: "Contact_Manager",
      desc: `Full-stack contact management app built with Spring Boot and Java. Features user authentication, CRUD operations, and responsive UI.`,
      icon: "fa-id-badge",
      id: 3,
      actionButton: {
        title: "Click Me",
        link: "/my_project",
      },
    },
  ]);

  return (
    <div className="bg-violet-400 py-20 px-4">
      <h1 className="text-center text-4xl font-bold">My Projects</h1>
      <h3 className="text-center pb-10 text-gray-600">___ what I build ___</h3>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-violet-200 hover:bg-violet-300 shadow-lg rounded-xl p-6 flex flex-col items-center transform transition hover:-translate-y-2 text-center space-y-4"
          >
            <i className={`fa-solid ${project.icon} text-4xl text-orange-500`}></i>
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.desc}</p>
            <a
              href={project.actionButton.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow"
            >
              {project.actionButton.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProject;
