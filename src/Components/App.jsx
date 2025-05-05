import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";

function App(){
    
    return(<div className="App">
            <Header />
            <Home />
            <About />
            <Service />
            <Projects />
            <Contact />
            <Footer />
        </div>);

}
export default App;