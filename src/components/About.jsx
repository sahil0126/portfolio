import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div  className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"   >
        <div className="pb-8" >
          <p  className="text-4xl font-bold inline border-b-4 border-gray-500 "   >About</p>
        </div>
        
        <p className="text-xl mt-20" >
        I'm a Java Developer with 10 months of internship experience and a strong foundation in backend development using Java, Spring Boot, Hibernate, and MySQL. I’ve also worked with frontend technologies like HTML, CSS, JavaScript, and ReactJS.
        </p>
        <br></br>

        <p className="text-xl" >
        I've built full-stack projects like an Expense Tracker App and an Employee Management System, and contributed to HTML5-based games as a frontend  dev intern. I'm passionate about learning, building useful software, and solving real-world problems.
        </p>
      </div>
    </div>
  );
};

export default About;
