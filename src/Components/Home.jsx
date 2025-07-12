import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import About from "./About";
import Service from './Service';
import Projects from './Projects';
import Contact from './Contact';
import Footer from "./Footer";
import Button from "./Button";


function Home() {
  const typedRef = useRef(null);        // DOM span for typed text
  const typedInstance = useRef(null);   // Store Typed instance

  useEffect(() => {
    
    document.querySelectorAll(".typed-cursor").forEach(el => el.remove());

    const items = typedRef.current.getAttribute("data-typed-items").split(", ");

    typedInstance.current = new Typed(typedRef.current, {
      strings: items,
      typeSpeed: 100,
      backSpeed: 60,
      startDelay: 200,
      backDelay: 1500,
      loop: true,
      showCursor: true
    });

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (<>
    <Header />
    <section
      className="container-fluid bg-image"
      id="home"
      style={{ backgroundImage: `url("/assets/images/home1.jpg")` }}
    >
      <div className="overlay"></div>
      <div className="text-white homesection" data-aos="fade-up" data-aos-delay="100">
        <div className="table-cell">
          <div className="container-fluid p-0">
            <h2 className="home-uptitle">Hello There,</h2>
            <h1 className="home-title">I am Naveen</h1>
            <p className="home-subtitle">
              <span ref={typedRef} className="typed" data-typed-items="Designer, Developer, Freelancer"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <About />
    <Service />
    <Projects />
    <Contact />
    <Footer />
    <Button />
    </>
  );
}

export default Home;
