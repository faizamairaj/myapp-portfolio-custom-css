import Image from "next/image";
import "../style/Hero.css";
import "../style/About.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function About() {
    return(
        <div className="header-container">
              <div className="header-boxes-con">
                {/* left */}
                <div>
                 <Image src={"/images/profile.png"}
                 width={200}
                 height={200}
                 className="header-image"
                 alt="profile"></Image>

                 <div className="social-icons">
                    <div className="s-icon1">
                    <FaYoutube/>
                 </div>

                 <div className="s-icon2">
                 <FaFacebook />
                 </div>

                 <div className="s-icon3">
                 <FaInstagram />
                 </div>
                 </div>
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">About us</h1>
                        <p className="des-hero">We are a passionate team dedicated to creating innovative web solutions that make life easier and businesses grow. With a focus on quality and user experience, we build websites that connect, inspire, and engage. Our mission is to bring your ideas to life with creativity and expertise.</p>
                </div>
              </div>
        </div>
    )
}
export default About