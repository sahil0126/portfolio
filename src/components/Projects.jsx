import React from "react";
import expense_tracker from "../assets/expense_tracker.jpg";
import employee_management_system from "../assets/expense_tracker.jpg";
import car_rent_system from "../assets/car_rental_sys.png";

const Projects = () => {
  const openLink = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      console.warn("Attempted to open a null or undefinedd link");
    }
  };

  const myProjects = [
    {
      id: 1,
      title:"Expense Tracker",
      src: expense_tracker,
      demoLink: "https://expense-tracker-springboot-reactjs.netlify.app/",
      codeLink:
        "https://github.com/sahil0126/Expense_Tracker_Using_Spring_Boot_PostgreSQL_ReactJs",
    },
    {
      id: 2,
      title:"Employee Management System",
      src: employee_management_system,
      demoLink:null,
      codeLink: "https://github.com/sahil0126/Employee_Management_System",
    },
    {
      id: 3,
      title:"Car Rental System using Java",
      src: car_rent_system,
      demoLink:null,
      codeLink: "https://github.com/sahil0126/Car_Rental_System_Using_Java",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {myProjects.map(({ id,title ,src ,demoLink,codeLink}) => (
            <div id={id} className="shadow-md shadow-gray-500 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                />

                <div className="flex justify-center items-center sm:text-xs font-bold">
                <h3 className="my-3 text-lg"  >{title}</h3>

                </div>

              <div className="flex items-center justify-center">



                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105
                disabled:opacity-50 
                disabled:cursor-not-allowed
                disabled:pointer-events-none "  
                onClick={()=> openLink(demoLink)}
                disabled={!demoLink}
                >
                  Demo
                </button>



                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105
                 !codeLink ? 'opacity-50 cursor-not-allowed' : '' "
                 onClick={()=> openLink(codeLink)}>
                  Code
                </button>




              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
