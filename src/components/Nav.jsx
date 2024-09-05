import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 text-sage bg-dark-green">
      <div className="flex justify-end items-center p-4 mr-10">
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-aqua">About</a>
          <a href="#projects" className="hover:text-aqua">Projects</a>
          <a href="#experience" className="hover:text-aqua">Experience</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
