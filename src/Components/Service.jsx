import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Service() {

    const services = [
        { id: 1, icon: "bi bi-briefcase", title: "WEB DESIGN",content: "Build dynamic, feature-rich web Sites customized to specific needs. Include custom themes, plugins, and extensions. Web design focuses on creating websites that are easy, intuitive, and enjoyable for users. A coherent design system across pages makes the website feel unified and professional.Consistency in design elements, This consistency builds trust and familiarity, enhancing the overall user experience. Subtle animations can guide user attention and improve usability, while excessive animations can slow down a site. Interactive elements make websites feel dynamic." },
        { id: 2, icon: "bi bi-card-checklist", title: "WEB DEVELOPMENT",content: "Offer full-cycle custom website development tailored to the client's brand, goals, and audience. Front-end development focuses on the client side, Back-end development deals with the server side, handling data processing, storage, and application logic. Full-stack development combines front-end and back-end skills, enabling developers to work on all layers of a website or app. Databases handling tasks like user information, product listings, and content management. Performance is essential for a smooth experience and includes minimizing load times, reducing server response time." },
        { id: 3, icon: "bi bi-binoculars", title: "RESPONSIVE DESIGN",content: "Provide responsive web design services to ensure websites look and function well on any device. Responsive design ensures websites work well on any device by adjusting layouts and components for different screen sizes. Responsive web development is essential for accessibility and enhances the user experience across devices. Adaptive design, creates different layouts for various screen sizes, providing an optimized experience. Both approaches are crucial for creating mobile-friendly websites, which are essential in today’s multi-device world." },
    ];

    return (
        <section id="services" className="services-mf" data-aos="fade-in" data-aos-delay="100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-modal">
                <div className="section-title text-center">
                  <h1 className="title"> SERVICES</h1>
                  <p className="section-subtitle">Our services are designed to help you achieve your goals</p>
                </div>
                <div className="row">
                  {services.map((Service)=>{
                    return(            
                    <div key={Service.id} className="col-md-4">
                      <div className="Services-hover">
                            <div className="services-icon text-center">
                                <span className="icons"><i className={Service.icon}></i></span>
                                <h4 className="mt-4">{Service.title}</h4>
                            </div>
                            <div className="service-body">
                                <p>{Service.content}
                                </p>
                            </div>
                        </div>
                    </div>
                  )})}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )

}

export default Service;