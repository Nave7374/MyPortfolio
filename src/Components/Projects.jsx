import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  
  const project = [
    { id: 1, name: "Transport Management System", type: "web service", img: "./assets/images/tmsbase.jpg" },
    { id: 2, name: "Bank Application", type: "Application", img: "" },
    { id: 3, name: "Student Management System", type: "web Application", img: "" },
    { id: 4, name: "To-do List", type: "web site", img: "" },
    { id: 5, name: "Keeper App", type: "web site", img: "" },
    { id: 6, name: "Notepad Clone Application", type: "Application", img: "" },
  ];

  return (
    <section id="myworks" className="work-sec" data-aos="fade-in" data-aos-delay="100">
      <div className="container-fluid work-margin">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-modal">
              <div className="my-work-title text-center">
                <h1 className="title">MY WORKS</h1>
                <p className="sub-title">Check out some of my projects</p>
              </div>

              {/* Loop over array in chunks of 3 */}
              {[0, 3].map((startIndex) => (
                <div className="row mt-3" key={startIndex}>
                  {project.slice(startIndex, startIndex + 3).map((proj) => (
                    <div className="col-md work-sec-margin" key={proj.id}>
                      <div className="pic-hover">
                        <div className="img-head">
                          {proj.img ? (
                            <img src={proj.img} alt={`${proj.name} Not Found`} className="img-fluid pic" />
                          ) : (
                            <div
                              className="img-fluid pic d-flex justify-content-center align-items-center bg-secondary text-white"
                              style={{ height: "200px" }}
                            >
                              No Image
                            </div>
                          )}
                        </div>
                        <div className="work-body mt-2">
                          <h4>
                            {proj.name}
                            <h1 className="mt-0">
                              <a href={`/projects/projectid/${proj.id}`} id={`${proj.name}-btn`} rel="noreferrer">
                                <i className="bi bi-plus-circle float-end text-primary"></i>
                              </a>
                            </h1>
                          </h4>
                          <span className="text-primary">{proj.type}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;