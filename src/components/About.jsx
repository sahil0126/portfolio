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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit doloremque consequuntur quaerat iste ratione est,
          distinctio ea minima ipsam nesciunt quia necessitatibus sit sunt sed
          in, placeat dolorem architecto laboriosam praesentium aut voluptatem?
          Officiis, accusantium.
        </p>
        <br></br>

        <p className="text-xl" >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
          doloremque odio alias eos voluptatum officia cum dolorem vitae
          veritatis provident. Veniam, voluptate! Debitis architecto blanditiis
          possimus in, repellat atque quasi.
        </p>
      </div>
    </div>
  );
};

export default About;
