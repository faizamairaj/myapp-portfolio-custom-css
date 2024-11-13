import "../style/Services.css";
import { FcMultipleDevices } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { FcCamera } from "react-icons/fc";

function Services() {
    return(
        <main className="main">
            <div className="ser-container">
          {/* top div */}
          <div className="top-div-ser">
            <h2 className="title-ser">My Services</h2>
            <p className="des-ser">I design and build websites that look great and work smoothly on any device. I focus on clean, user-friendly layouts. I’m here to help bring your ideas to life with reliable, modern web solutions.</p>
          </div>
          {/* bottom div */}
          <div className="boxes-con">
             <div className="box">
                <div className="ser-icon">
                < FcMultipleDevices />
                </div>
                <h3>Web Development</h3>
                <span>Blog, E-Commerce</span> 
             </div>

             <div className="box">
                <div className="ser-icon">
                <FcGallery />
                </div>
                <h3>Web Development</h3>
                <span>Blog, E-Commerce</span> 
             </div>

             <div className="box">
                <div className="ser-icon">
                <FcReading/>
                </div>
                <h3>Web Development</h3>
                <span>Blog, E-Commerce</span> 
             </div>

             <div className="box">
                <div className="ser-icon">
                <FcEditImage/>
                </div>
                <h3>Web Development</h3>
                <span>Blog, E-Commerce</span> 
             </div>

             <div className="box">
                <div className="ser-icon">
                <FcBusinesswoman />
                </div>
                <h3>Web Development</h3>
                <span>Blog, E-Commerce</span> 
             </div>

             <div className="box">
                <div className="ser-icon">
                <FcCamera/>
                </div>
                <h3>Web Development</h3>
                <span>Blog, E-Commerce</span> 
             </div>
          </div>
            </div>
        </main>
    )
}
export default Services