import { useState } from "react";
 import bannerBackground from "../assets/banner_wallpaper.svg";

const Skills = () => {
  const [skills] = useState([
    { title: "Java", id: 1 },
    { title: "J2EE", id: 2 },
    { title: "JDBC", id: 3 },
    { title: "Servlets", id: 4 },
    { title: "JSP", id: 5 },
    { title: "Hibernate", id: 6 },
    { title: "Spring IOC", id: 7 },
    { title: "Spring MVC", id: 8 },
    { title: "Spring Boot", id: 9 },
    { title: "HTML5", id: 10 },
    { title: "CSS", id: 11 },
    { title: "Javascript", id: 12 },
    { title: "React JS", id: 13 },
    { title: "Mysql", id: 14 },
    { title: "SQL", id: 15 },
    { title: "GIT", id: 16 },
    { title: "Eclipse", id: 17 },
    { title: "VS Code", id: 18 },
    { title: "Postman", id: 19 },
    { title: "Tomcat", id: 20 },
    { title: "NetBeans", id: 21 },
  ]);

  return (
    <div className="border py-20 bg-violet-400 px-4">
      <h1 className="text-4xl font-bold text-center">My Skills</h1>
      <h3 className="text-center pb-16">___ what I know ___</h3>

      {/* Background Container */}
      <div
        // style={{
        //   backgroundImage: `url(${bannerBackground})`,
        //   backgroundSize: "cover",
        // }}
        className="box-container flex flex-col md:flex-row items-center justify-center py-16 gap-10"
      >
        {/* Text Content */}
        <div className="text-white w-full md:w-1/2 text-center shadow-xl md:text-left px-4 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">I love these technologies</h1>
          <p>
            I specialize in a diverse tech stack, from core Java and Spring Boot to front-end technologies like React.js, enabling
            me to build complete full-stack applications.
          </p>
          {/* <button className="text-lg px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg">
            Hire Me
          </button> */}
        </div>

        {/* Skills Grid */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill) => (
              <p
                key={skill.id}
                className="bg-gray-300 text-black px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition"
              >
                {skill.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
