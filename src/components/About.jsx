import { useState, useRef, useEffect } from "react";
import Typed from "typed.js";
import imgBanner from "../assets/RisImg.jpg";

const About = () => {
  const [data] = useState({
    image: imgBanner,
    title: "Java Developer & Web Developer",
    desc1: `Hi, my name is Rishav.I am an Electrical and Electronics engineer turned Software Engineer, which is now a Full-Time Career. Java Software Developer | Software Engineer | Software Developer | Frontend Developer | Full Stack Developer`,
    desc2: `I completed a one-year internship at JSpiders as a Java Full Stack Developer, where I worked on real-time projects using Java, Spring Boot, Hibernate, MySQL, and React.js. I gained hands-on experience in building full-stack web applications, REST APIs, and responsive user interfaces.
     This internship helped me strengthen my development skills and prepared me for professional roles in software development.`,
    actionButton: {
      title: "Download CV",
      link: "https://drive.google.com/file/d/1c7iPYZfocM3xL70-Z7l4tPoB77APaQo6/view",
    },
  });

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java Developer.", "Backend Developer.", "Frontend Developer."],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="main-container border py-20 bg-violet-400 px-4">
      <h1 className="text-center text-4xl font-bold">About Me</h1>
      <h3 className="text-center pb-16">___ who i am ___</h3>
      <div className="inside-main flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-2/3 md:w-1/2">
            <img className="rounded-full w-full" src={data.image} alt="Rishav Kumar" />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex justify-center text-center md:text-left">
          <div className="space-y-5">
            <h2 className="text-3xl">
              I'm Rishav and I'm{" "}
              <span className="font-bold underline text-orange-500" ref={el}></span>
            </h2>
            <p>{data.desc1}</p>
            <p>{data.desc2}</p>
            <a
              href={data.actionButton.link}
              className="inline-block mt-3 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.actionButton.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
