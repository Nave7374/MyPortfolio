import Footer from "./Footer";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import FullPageLoader from "./FullpageLoader";
import LoginPage from "../assets/images/tms/LoginPage.png";
import dashboard from "../assets/images/tms/dashboard.png";
import Shipment from "../assets/images/tms/Shipment.png";
import Bookings from "../assets/images/tms/Bookings.png";


const projectarr = [
    { id: "1", name: "Transport Management System", category: "web service", imgage:[{img: LoginPage}, {img:dashboard}, {img:Shipment},{img:Bookings}],
    content:"Designed and developed a Transport Management System to efficiently manage logistics and transportation operations. The system includes key modules such as user authentication, vehicle and driver management, shipment scheduling, and live tracking of vehicle locations. It supports role-based access control, allowing different functionalities for admin, driver, and manager roles. The application facilitates real-time updates, route optimization, and status monitoring of shipments" },
    { id: "2", name: "Bank Application", category: "Application", imgage:[{img:"" }, {img:'./assets/images/tms 2.jpg'}, {img:'./assets/images/tms3.jpg'}],
    content:"Developed a Bank Application using java swing technologies. Implemented features like Login, Account management.  "},
    { id: "3", name: "Student Management System", category: "web Application", imgage:[{img: ""}, {img:'./assets/images/tms 2.jpg'}, {img:'./assets/images/tms3.jpg'}],
    content:"Developed a web-based system to manage student records (add, update, delete, view). Used Java Servlets to handle HTTP requests and process backend logic. Connected to PostgreSQL via JDBC and managed database through pgAdmin. Created dynamic JSP pages for the frontend user interface to input and display student information. Managed session handling and user authentication for secure access"},
    { id: "4", name: "To-do List", category: "web site", imgage:[{img: ""}, {img:'./assets/images/tms 2.jpg'}, {img:'./assets/images/tms3.jpg'}] ,
    content:""},
    { id: '5', name: "Keeper App", category: "web site", imgage:[{img: ""}, {img:'./assets/images/tms 2.jpg'}, {img:'./assets/images/tms3.jpg'}],
    content:"" },
    { id: '6', name: "Notepad Clone Application", category: "Application", imgage:[{img: ""}, {img:'./assets/images/tms 2.jpg'}, {img:'./assets/images/tms3.jpg'}],
    content:"Developed a Notepad clone using Java Swing to mimic the basic functionality of Windows Notepad. Implemented features such as New, Open, Save, Save As, Cut, Copy, Paste, Undo, Redo, and Select All. Used Java File I/O (BufferedReader, Filewriter , JFileChooser) for file operations. Applied menu bars and dialog boxes using JMenuBar, JMenuItem, JFileChooser, and JDialog. Handled events using ActionListener and KeyListener for user interactions. Built a clean and user-friendly graphical interface (GUI) using Java Swing components." },
];

function ProjectDescription(){

    const {id} = useParams();

    const [loading,setLoading] = useState(true);
    const [images,setImages] = useState([]);
    const [project,setPro]=useState(null);

    useEffect(()=>{
        const p = projectarr.find((item)=> {return item.id===id })
        setPro(p)
        console.log(p);
        setImages(p.imgage);
        setTimeout(()=>{
            setLoading(false)
        },1000) 
    },[id])

    if (loading) return <FullPageLoader />; // Optional loader
    if (!project) return <p className="text-center text-danger">Project not found</p>;

    return (<>
        {/* <!-- Porject Details Header --> */}
        <section className="container-fluid bg-primary p-4 pb-5" id="home1">
            <div className="row text-center text-white">
                <div className="col">
                    <h1 className="m-5 mb-3">PROJECT DETAILS</h1>
                    <p className="mb-5"><a className="text-white" href="/#home">Home</a> / <span className=""> Project Details</span></p>
                </div>
            </div>
        </section>

        {/* Project Details */}
        <section className="container-fluid">
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                <div className="project-content" id="project-details">
                    <div className="row">
                    {/* Left - Carousel */}
                    <div className="col-md-7">
                        <div className="project-img">
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {images && images.map((item,index) => {
                                    return  <div key={index} className="carousel-item active">
                                                <img src={item.img} className="d-block w-100 img-fluid" alt="img not found" />
                                            </div>
                                })}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        </div>
                    </div>

                    {/* Right - Info */}
                    <div className="col-md-5">
                        <div className="content">
                        <div className="content-header">
                            <h3>Project Information</h3>
                        </div>
                        <div className="content-body mt-4">
                            <p><b>Project Name</b>: <span className="text-primary">{project.name}</span></p>
                            <p><b>Category</b>: <span className="text-primary">{project.category}</span></p>
                        </div>
                        <div className="content-footer">
                            <p><b>Project Description</b> <br/>
                                {project.content ? project.content : "No description available."}
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <Footer />
    </>)
}

export default ProjectDescription;