import Image from "next/image";
import "../style/Hero.css";

function Hero() {
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
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">
                        I'm Faiza Sheikh
                        Front-end Developer </h1>
                        <p className="des-hero">I have experience building websites using HTML, CSS, JavaScript, and TypeScript. I’m skilled in creating responsive, user-friendly designs. I’m also learning advanced web development to improve my abilities even more.</p>
                        <button className="hero-btn">Hire me </button>
                </div>
              </div>
        </div>
    )
}
export default Hero