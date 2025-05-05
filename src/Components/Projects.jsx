import React from "react";

function Projects() {

    return(
        <section id="myworks" className="work-sec" data-aos="fade-in" data-aos-delay="100">
        <div className="container-fluid work-margin">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-modal">
                <div className="my-work-title text-center">
                  <h1 className="title">MY WORKS</h1>
                  <p className="sub-title">Check out some of my projects</p>
                </div>
                <div className="row mt-3">
                  <div className="col-md work-sec-margin">
                    <div className="pic-hover">
                      <div className="img-head">
                        <img src="./assets/images/tmsbase.jpg" alt="padam Not Found" className="img-fluid pic"/> 
                      </div>
                      <div className="work-body mt-2">
                        <h4>Transport Management System <h1 className="mt-0"><a href='/projects?project=0' id='tms-btn' target='_blank'  rel="noreferrer"><i  className="bi bi-plus-circle float-end text-primary"></i></a></h1></h4>
                        <span className="text-primary">Web Design </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md work-sec-margin">
                    <div className="pic-hover">
                      <div className="img-head">
                        <img src="./assets/images/nmbase.jpg" alt="padam Not Found" className="img-fluid pic" />
                      </div>
                      <div className="work-body mt-2">
                        <h4>Reducing the Environmental Footprint of Food<h1 className="mt-0"><a href='/projects?project=1' target='_blank'  rel="noreferrer"><i id="nm-btn" className="bi bi-plus-circle float-end text-primary"></i></a></h1></h4>
                        <span className="text-primary">Web Design </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md work-sec-margin">
                    <div className="pic-hover">
                      <div className="img-head">
                        <img src="./assets/images/malware bas.jpg" alt="padam Not Found" className="img-fluid pic"/> 
                      </div>
                      <div className="work-body mt-2">
                        <h4>Malicious mining Code detection Using Machine Learning Algorithms <h1 className="mt-0"><a href='/projects?project=2' target='_blank'  rel="noreferrer"><i id="md-btn" className="bi bi-plus-circle float-end text-primary"></i></a></h1></h4>
                        <span className="text-primary">Software Design </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )

}
export default Projects;