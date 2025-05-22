import { useState } from "react";
import imgBanner from "../assets/img2.png"
const About = () => {
    const[data,setData]=useState({
        image: imgBanner,
        title:"Java Developer & Web Developer",
        desc1:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia accusamus
                             corrupti! Recusandae sunt pariatur eaque accusamus labore animi exercitationem.`,
        desc2:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus, nostrum odio blanditiis alias 
        maxime aperiam assumenda architecto 
                            quam laborum modi praesentium magnam, officiis labore totam animi commodi illum. Libero.`,
        actionButton:{
            title:"Read More ...",
            link:'/readmore'
        },
    })
    return (
        <>
            <div className="main-container border py-14 bg-gray-100">
                <h1 className="text-center text-4xl pb-16 underline font-bold">About Me</h1>
                <div className="inside-main flex items-center">
                    {/* image */}
                    <div className="w-full flex justify-center">
                        <img className="rounded-full w-fit" src={data.image} alt="Rishav Kumar" />

                    </div>
                    {/* text */}
                    <div className="w-full flex justify-center">
                       <div className="space-y-5 w-2/3">
                         <h1 className="text-5xl font-semibold ">{data.title}</h1>
                        <p>{data.desc1}</p>
                        <p>{data.desc2}</p>
                        <br />
                        <a href={data.actionButton.link} className="mt-3 px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg">{data.actionButton.title}</a>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;