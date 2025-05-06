import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";
import Button from "./Button";

function App(){
    
    return(<div className="App">
            <Header />
            <Home />
            <About />
            <Service />
            <Projects />
            <Contact />
            <Footer />
            <Button />
        </div>);

}
export default App;