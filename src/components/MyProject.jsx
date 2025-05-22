import { useState } from "react";
const MyProject = () => {
        const [projectList, setProjectList] = useState([
            {
                title: "Shopping_Cart",
                desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia accusamus
                             corrupti! Recusandae sunt pariatur eaque accusamus labore animi exercitationem.`,
                icon: "fa-cart-shopping",
                id:1,
                actionButton:{
                    title:"Click Me",
                    link:"/my_project"
                }
            },
            {
                title: "Cric_BuzzInformer",
                desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia accusamus
                             corrupti! Recusandae sunt pariatur eaque accusamus labore animi exercitationem.`,
                icon: "fa-baseball-bat-ball",
                id:2,
                actionButton:{
                    title:"Click Me",
                    link:"/my_project"
                }
            },
            {
                title: "Contact_Manager",
                desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia accusamus
                             corrupti! Recusandae sunt pariatur eaque accusamus labore animi exercitationem.`,
                icon: "fa-id-badge",
                id:3,
                actionButton:{
                    title:"Click Me",
                    link:"/my_project"
                }
            },
          
            
        ]);
         
    return (
        <>
        <div className="project-container py-14"> 
            <h1 className="text-center text-4xl pb-10 underline font-bold">My Project</h1>
            <div className="inside-container space-x-5 flex">
                {/* project list */}
              {projectList.map((project, index) => (
  <div key={index} className="bg-slate-100 hover:bg-slate-200 shadow-lg rounded-xl w-full flex justify-center">
    <div className="text-center space-y-5 w-2/3">
      <h1 className="text-4xl font-semibold">
        <i className={`fa-solid text-4xl cursor-pointer ${project.icon}`}></i>
        <br />
        {project.title}
      </h1>
      <p>{project.desc}</p> {/* You can add description or other fields here */}
      <button className="mt-3 px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg">
        {project.actionButton.title}
      </button>
    </div>
  </div>
))}

                {/* <div className="bg-slate-200 hover:bg-slate-300 shadow-lg rounded-xl w-full flex justify-center">
                   <div className=" text-center space-y-5 w-2/3">
                   
                     <h1 className="text-4xl font-semibold"><i class="fa-solid text-4xl cursor-pointer fa-cart-shopping"></i><br />Shopping_Cart</h1>
                    <p></p>
                         <button className="mt-3 px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg">Click Me</button>
                   </div>
                </div>
                <div className="bg-slate-200 hover:bg-slate-300 shadow-lg rounded-xl w-full flex justify-center">
                    <div className=" text-center space-y-5 w-2/3">
                    
                        <h1 className="text-4xl font-semibold"><i class="fa-solid text-4xl cursor-pointer fa-baseball-bat-ball"></i><br />Cric_buzzInformer</h1>
                    <p></p>
                         <button className="mt-3 px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg">Click Me</button>
                    </div>
                </div>
                <div className="bg-slate-200 hover:bg-slate-300 shadow-lg rounded-xl w-full flex justify-center">
                    <div className=" text-center space-y-5 w-2/3">
                    
                        <h1 className="text-4xl font-semibold"><i class="fa-solid text-4xl cursor-pointer fa-id-badge"></i><br />Smart_Contact</h1>
                    <p></p>
                         <button className="mt-3 px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg">Click Me</button>
                    </div>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default MyProject;