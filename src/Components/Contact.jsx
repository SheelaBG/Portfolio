
import resume from "../Images/SheelaResume.pdf";

const Contact = () => {
    return ( 
        <>
         <div id="contact">
         
                <div className="container">
                <h1 className="subTitle">Contact Me</h1>
                <p><i className="fa-solid fa-paper-plane"></i>sheelabg25@gmail.com</p>
                <p><i className="fa-solid fa-phone"></i>7019346625</p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/sheela-g-75422724b" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/SheelaBG" target="_blank"><i className="fa-brands fa-square-github"></i></a>
                    <a href="#"><i className="fa-brands fa-square-instagram" target="_blank"></i></a>
                    <a href="#"><i className="fa-brands fa-square-facebook" target="_blank"></i></a>

                </div>
                <a href={resume} download class="btn btn2">Download CV</a>
            </div>
            </div>
        </>
     );
}
 
export default Contact;