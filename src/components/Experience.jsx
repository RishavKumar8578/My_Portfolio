import { useState } from "react";

const Experience = () => {
  const [experienceList] = useState([
    {
      title: "JSpiders",
      role: "Trainee - Java Full Stack Developer",
      duration: "September 2023 - April 2025",
      desc: `Completed training in Java Full Stack Development including Java, Spring Boot, Hibernate, MySQL, and React.js. Worked on real-time projects and strengthened end-to-end web development skills.`,
      icon: "fa-graduation-cap",
      actionButton: {
        title: "View Details",
        link: "https://www.jspiders.com/",
      },
    },
    {
      title: "Core Career Pvt. Ltd",
      role: "Technology & Business Efficiency Associate",
      duration: "May 2025 - Present (Full-Time)",
      desc: `Contributing to process automation, backend optimization, and efficiency improvement through technology integration and system enhancement initiatives.`,
      icon: "fa-briefcase",
      actionButton: {
        title: "Visit Website",
        link: "https://www.careersatcore.com/",
      },
    },
    {
      title: "Inspironlabs Software System Pvt. Ltd",
      role: "Intern - Software Engineer",
      duration: "August 2025 - February 2026",
      desc: `Working on live projects focusing on backend development and API integrations. Gaining real-world exposure to scalable software development and collaborative environments.`,
      icon: "fa-laptop-code",
      actionButton: {
        title: "Visit Website",
        link: "https://inspironlabs.com/",
      },
    },
  ]);

  return (
    <div className="bg-violet-400 py-20 px-4">
      <h1 className="text-center text-4xl font-bold">Experience</h1>
      <h3 className="text-center pb-10 text-gray-600">___ my professional journey ___</h3>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experienceList.map((exp, index) => (
          <div
            key={index}
            className="bg-violet-200 hover:bg-violet-300 shadow-lg rounded-xl p-6 flex flex-col items-center transform transition hover:-translate-y-2 text-center space-y-4"
          >
            <i className={`fa-solid ${exp.icon} text-4xl text-orange-500`}></i>
            <h2 className="text-2xl font-semibold">{exp.title}</h2>
            <h3 className="text-lg font-medium text-gray-800">{exp.role}</h3>
            <p className="text-sm text-gray-600 italic">{exp.duration}</p>
            <p className="text-sm text-gray-700">{exp.desc}</p>
            <a
              href={exp.actionButton.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow"
            >
              {exp.actionButton.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
