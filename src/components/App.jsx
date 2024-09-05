import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import ScrollToTop from "./ScrollToTop";
// import Spotlight from "./Spotlight";

function App() {
  return (
    // <Spotlight>
    <div className="relative h-screen flex font-reddit z-10">
      
      <Nav />
      <div className="w-5/12 h-full fixed bg-dark-green z-10">
        <Home />
      </div>

      <div className="w-1/2 ml-auto h-full ">
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
      </div>
      <ScrollToTop />
     
    </div>
    //  </Spotlight> 
  );
}

export default App;

// import { useState } from "react";

// import Nav from "./Nav";
// import Home from "./Home";
// import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";
// import ScrollToTop from "./ScrollToTop";

// function App() {
//   return (
//     <>
//       <Nav />
//       <section id="/">
//         <Home />
//       </section>
//       <section id="about">
//         <About />
//       </section>
//       <section id="projects">
//         <Projects />
//       </section>
//       <section id="contact">
//         <Contact />
//       </section>
//       <ScrollToTop />
//     </>
//   );
// }

// export default App;
