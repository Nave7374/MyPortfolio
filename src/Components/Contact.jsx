import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import emailjs from 'emailjs-com';

function Contact(){

    const links = [
        {id:1,link:"https://www.linkedin.com/in/naveen-r-475890295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",icon:"bi bi-linkedin"},
        {id:2,link:"http://github.com/Nave7374",icon:"bi bi-github"},
        {id:3,link:"https://www.instagram.com/naveen_r_7374/",icon:"bi bi-instagram"},
        {id:4,link:"https://www.facebook.com/r.naveen.547",icon:"bi bi-facebook"},
    ]
    const [msg, setMsg] = useState("");
    const [err, setErr] = useState("");
    const [details,setDetails] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    function handleChange(e){
        const {name , value} = e.target;
        setDetails((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        const { name, email, subject, message } = details;
      
        if (name && email && subject && message) {
          const proms = {
            from_subject:subject,
            from_name:name,
            from_message:message,
            from_email:email
          };
          emailjs.init("mSH3ZqAm7O_ltQmAP");
          emailjs
            .send("service_0va32pi", "template_agcr2xr", proms)
            .then((response) => {
              setMsg("Message sent successfully");
              setErr("");
                setDetails({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
                console.log(response);
            })
            .catch((error) => {
              console.error("Error sending email:", error);
              setMsg("");
              setErr("Something went wrong. Please try again later.");
            });
        } else {
          setErr("Please fill in all fields.");
        }
        // EmailJS service ID: service_0va32pi
        // EmailJS template ID: template_agcr2xr
        // EmailJS user ID: mSH3ZqAm7O_ltQmAP
      //AE1C39737F74B87492CDEC7124CE8677A38B
    }


    return(
        <section className="base-mf bg-image" id="contact" style={{backgroundImage:"url(https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&w=600)"}}>
        <div className="overlay-mf"></div>
        <div className="container-fluid">
          <div className="row" data-aos="fade-in" data-aos-delay="100">
            <div className="col-md-12 ">
              <div className="contact-box-modal">
                <div className="contact-sec">
                  <div className="row">
                    <div className="col-md-7 send-msg">
                      <h3 className="title-ul">Send Message</h3>
                      <form className="submit-form" onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <input type="text" id="name" name="name" onChange={handleChange} className="form-control" value={details.name} placeholder="Your Name" required />
                        </div>
                        <div className="mb-3">
                          <input type="email"id="email" name="email"  className="form-control" onChange={handleChange} value={details.email} placeholder="Your E-Mail" required />
                        </div>
                        <div className="mb-3">
                          <input type="text" id="Subject" name="subject" className="form-control" value={details.subject} onChange={handleChange} placeholder="Subject" required />
                        </div>
                        <div className="mb-3">
                          <textarea cols="40" rows="5" className="form-control" id="message" name="message" value={details.message} placeholder="Message" onChange={handleChange} required></textarea>
                        </div>
                        <div className="text-center mt-5">
                          <span className="text-success d-block">{msg}</span>
                          <span className="text-danger d-block">{err}</span>
                          <button type="submit" className="btn btn-primary mt-3">Send message</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-5">
                      <h3 className="title-ul">Get In Touch</h3>
                      <div className="get-in-touch">
                        <p className="Contact-p">I’d love to hear from you! Whether you have a question, want to collaborate, feel free to reach out.</p>
                      </div>
                      <div className="contact-icons">
                        <p><i className="bi bi-geo-alt"></i> Tamil Nadu,India</p>
                        <p><i className="bi bi-phone"></i> +91 8072793987</p>
                        <p> <i className="bi bi-envelope me-1"></i> nave7374@gmail.com</p>
                      </div>
                      <div>
                        {links.map((link)=>{
                            return (
                                <a key={link.id} href={link.link} target="_blank"><span className="icons-info"><i className={link.icon}></i></span></a>
                            )
                        })}
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

export default Contact;