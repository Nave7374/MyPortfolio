import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Header() {
  const navitem = [
    { id: 1, link: "#home", title: "Home" },
    { id: 2, link: "#about", title: "About" },
    { id: 3, link: "#services", title: "Services" },
    { id: 4, link: "#myworks", title: "Projects" },
    { id: 5, link: "#contact", title: "Contact" },
  ];

  function handleClick() {
    const element = document.getElementById("navbarNav");
    if (element && element.classList.contains("show")) {
      element.classList.remove("show");
    }else if (element && !element.classList.contains("show")) {
      element.classList.add("show");
    }
  }

  return (
    <header id="header" className="fixed-top">
      <nav className="navbar navbar-expand-lg p-3">
        
      {/* <!-- <a className="navbar-brand text-white" href="#"><span className="nav-folio">N</span>av<span className="nav-folio">F</span>olio</a> --> */}
        <a className="navbar-brand text-white" href="#home">Nav-Folio</a>

        {/* Hamburger Icon */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="custom-toggler-icon">☰</span>
        </button>

        {/* Collapsible Nav Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navitem.map((item) => (
              <li className="nav-item Hi" key={item.id}>
                <a className="nav-link" href={item.link} onClick={handleClick}>
                  {item.title}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a
                href="/assets/pdf/Resume.pdf"
                className="download-btn btn text-white"
                download
              >
                <span className="btn-text">Download Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
