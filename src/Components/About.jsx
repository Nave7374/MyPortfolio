import React, { useEffect } from "react";
import { Waypoint } from 'react-waypoint';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles


function About() {
  const arr = [
    {id: 1, title: "HTML", percentage: "90%", value: "90", ariaValuenow: "90"},
    {id: 2, title: "CSS", percentage: "75%", value: "75", ariaValuenow: "75"},
    {id: 3, title: "JAVA", percentage: "70%", value: "70", ariaValuenow: "70"},
    {id: 4, title: "JAVA SCRIPT", percentage: "70%", value: "70", ariaValuenow: "70"},
    {id: 5, title: "SQL", percentage: "90%", value: "90", ariaValuenow: "90"},
  ];

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      startEvent: 'load',
      mirror: false
    });
  
    // Allow React rendering to settle before refreshing
    setTimeout(() => AOS.refresh(), 0);
  }, []);
  

  // Function to handle progress bar animation
  const handleWaypointEnter = (id) => {
    const progressBar = document.querySelector(`#progress-bar-${id}`);
    if (progressBar) {
      progressBar.style.width = `${progressBar.getAttribute('aria-valuenow')}%`;
    }
  };

  return (
    <section id="about" data-aos="fade-in" data-aos-delay="100" className="about-mf pt-4">
      <div className="container-fluid about-mf">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src="/assets/images/Naveen Image1.jpg" alt="About-photo" className="img-fluid about-img-tag"/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-5">
                      <div className="about-info">
                        <p><span className="title-s"><b>Name:</b></span><span> Naveen R</span></p>
                        <p><span className="title-s"><b>Profile:</b></span><span> Full-stack Developer</span></p>
                        <p><span className="title-s"><b>E-Mail:</b></span><span> nave7374@gmail.com</span></p>
                        <p><span className="title-s"><b>Phone:</b></span><span> (+91)8072793987</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="skills-animation">
                    <div className="skill-title">
                      <h4 className="mt-3">Technical Skills </h4>
                    </div>
                    <div className="skill-level">
                      {arr.map((item) => (
                        <div key={item.id}>
                          <span>{item.title} {item.percentage}</span>
                          <div className="progress">
                            <div 
                              id={`progress-bar-${item.id}`} 
                              className="progress-bar progress-bar-info" 
                              role="progressbar" 
                              aria-valuenow={item.ariaValuenow} 
                              aria-valuemin="0" 
                              aria-valuemax="100" 
                              style={{ width: '0' }}
                            />
                          </div>
                          <Waypoint
                            onEnter={() => handleWaypointEnter(item.id)}
                            offset="90%"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="about-title">
                      <h3 className="title-ul">About Me </h3>
                    </div>
                    <div>
                      <p><span className="ms-3">Hi!</span> I'm Naveen R, a software developer with a passion for building efficient, scalable, and user-centric applications. I specialize in  
                        web development, mobile app development, backend engineering, full-stack development and thrive on solving complex challenges through code.
                      </p> 
                      <p><b>What I Do:</b></p>
                      <p>Proficient in: Programming languages like Java, JavaScript, SQL.</p>
                      <p>
                        I enjoy collaborating with teams to create software that makes a real impact. I believe in writing clean, maintainable code and constantly learning new technologies to stay ahead in a rapidly evolving industry. 
                        Whether it’s optimizing performance, improving user experience, or automating processes, I am always looking for ways to add value through innovative solutions.
                      </p>
                      <p>When I’m not coding, you’ll likely find me playing chess, listening to music, or watching cricket.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
