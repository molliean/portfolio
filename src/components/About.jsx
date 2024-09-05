import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center gap-10 items-center w-5/6 h-screen bg-dark-green text-sage">
      <div className="flex justify-center">
        {/* <h1 className="text-5xl font-bold">About me...</h1> */}
        <p className="font-extralight">
          I'm a former museum administrator turned web developer dedicated to
          building beautiful and functional UIs. My journey began in the arts,
          where for nearly 10 years I worked at some of the world's most
          renowned museums, like The Met and Getty, contributing to everything
          from exhibition prep to publications in professional journals. My
          roles required a borderline obsessive attention to detail and a knack
          for organizing complex projects - skills which now play a crucial role
          in my approach to coding and design. <br />
          <br />
          Craving a new challenge, I transitioned into the tech
          world and began supporting the leadership team at Weights & Biases, a rapidly
          growing startup at the cutting edge of AI and machine learning. It was
          here that I became curious about web development. Soon I was teaching
          myself how to code, and the rest is history. <br />
          <br />
          I'm excited to continue growing as a
          developer, bringing my unique background and skills to create
          intuitive and visually compelling user experiences.
        </p>
      </div>
      {/* <div className="flex flex-wrap w-2/3 bg-slate-50">
        <img src="" alt="asdf" className="p-4" />
        <img src="" alt="asdf" className="p-4" />
        <img src="" alt="asdf" className="p-4" />
        <img src="" alt="asdf" className="p-4" />
        <img src="" alt="asdf" className="p-4" />
        <img src="" alt="asdf" className="p-4" />
        <img src="" alt="asdf" className="p-4" />
        <img src="" alt="asdf" className="p-4" />
        <img src="" alt="asdf" className="p-4" />
        <img src="" alt="asdf" className="p-4" />
      </div> */}
    </div>
  );
};

export default About;
