import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDescription from "./ProjectDescription";

function App(){
    
    return(<Router>
       <Routes>
            <Route path="/" element={<div className="App"><Home /></div>}/>
            <Route path="/projects/projectid/:id" element={<ProjectDescription />} />  
       </Routes>
    </Router>);

}
export default App;