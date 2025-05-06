import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Button() {

    const [showbtn , setShowbtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setShowbtn(window.scrollY > 300);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    
    function handleClick(){
        const element = document.getElementById("home");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return <button id="backtotop" className={showbtn ? "show":""} onClick={handleClick} ><i className="bi bi-arrow-up-short show" ></i></button>

}

export default Button;