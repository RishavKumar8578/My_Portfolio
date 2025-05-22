import { useState } from "react";

const Header = () => {

    const[brandName, setBrandName]= useState("Rishav Kumar");
    const [menuLinks, setMenuKinks] = useState([
        {
            title: "Home",
            link:"/home",
            id:1,
        },
        {
            title: "About",
            link:"/about",
            id:2,
        },
        {
            title: "Skills",
            link:"/skills",
            id:3,
        },
        {
            title: "Portfolio",
            link:"/portfolio",
            id:4,
        },
        {
            title: "Contact",
            link:"/contact",
            id:5,
        }
    ])
    const [actionButton, setActionButton] = useState({
        title:"Hire Me",
        link: "/hire-me",
    });
    return (
        <>
        
           <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100 ">

            <div>
                {/*brand logo*/}
                <h1 className="text-2xl font-bold">{brandName}</h1>
            </div>

            <div className="space-x-5">
                {/*menu link*/}

                {menuLinks.map((link) => (
                    <a key={link.id} href="{link.link}" className="hover:text-orange-600">{link.title}</a>
                ))}

                {/* <a href="/home" className="hover:text-orange-700">Home</a>
                <a href="/about" className="hover:text-orange-700">About</a>
                <a href="/skills" className="hover:text-orange-700">Skills</a>
                <a href="/portfolio" className="hover:text-orange-700">Portfolio</a>
                <a href="/contact" className="hover:text-orange-700">Contact</a> */}
            </div>

            <div>
                {/*button*/}
                <a href="{actionButton.link}" className="px-3 py-1 bg-orange-500 rounded-full text-black shadow hover:bg-orange-600 text-1xl">{actionButton.title}</a>
            </div>

           </div>
        </>
    )
};

export default Header;