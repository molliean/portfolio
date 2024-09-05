import React from "react";
import ContactIcons from "./ContactIcons";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-dark-green text-sage">
      <div className="w-3/4">
        <h1 className="text-5xl">Mollie Anderson</h1>
        <p className="text-2xl font-light my-3">Full-stack web developer</p>
        <p className="text-1xl font-extralight my-4">Los Angeles, CA</p>
        <div className="mt-10">
          <ContactIcons />
        </div>
      </div>
    </div>
  );
};

export default Home;
