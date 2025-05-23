import cert1 from "../assets/java.jpeg";
import cert2 from "../assets/CCC.png";
import cert3 from "../assets/cCplus.webp";

const certificates = [
  
  {
    title: "Problem Solving Through Programming in C",
    img: cert2,
    link: "https://drive.google.com/file/d/19Y3zuEKUhgJOq4yfmAVwmOBV0ypARvmU/view",
  },
  {
    title: "Programming In Java",
    img: cert1,
    link: "https://drive.google.com/file/d/19iGH5VeBBQu93Y4Cd58cqyfUok5SuAW-/view",
  },
  {
    title: "Programming in C & C++",
    img: cert3,
    link: "https://drive.google.com/file/d/1HH0Daw-3xpG4LktnPFrzBk6G8RTzf-Pp/view",
  },
];

const Certificates = () => {
  return (
    <div className="border py-20 bg-violet-400 px-4">
      <h1 className="text-4xl font-bold text-center">My Certificates</h1>
      <h3 className="text-center pb-10 text-gray-600">___ what I earned ___</h3>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="bg-violet-200 hover:bg-violet-300 transform transition hover:-translate-y-2 rounded-lg overflow-hidden"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg sm:text-xl font-semibold text-center">{cert.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
