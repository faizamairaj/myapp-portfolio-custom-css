import "../style/Education.css";

function Education() {
    return(
        <main className="edu-main">
           <div className="edu-text">
            <h1>Education</h1>
            <p>Education is the process of learning skills, gaining knowledge, and understanding the world around us. It helps people grow, solve problems, and make better decisions in life. Education can happen in schools, online, or through experiences and personal study.</p>
           </div>

           <div className="box-con-edu"> 
            <div>
                <h1 className="uni-name">University of Karachi</h1>
                <span>student</span>
            </div>
            <div className="computer">
                <h1>Bachelor in Computer Science</h1>
                <p>A Bachelor in Computer Science is a college degree focused on computers and technology. It teaches programming, problem-solving, and how computers work. This degree helps prepare students for jobs in tech fields like software development and data analysis.</p>
            </div>
           </div>
           {/* box 2 */}
           <div className="box-con-edu"> 
            <div>
                <h1 className="uni-name">Governor IT Initiative</h1>
                <span>student</span>
            </div>
            <div className="computer">
                <h1>Certified Web 3.0 and metaverse</h1>
                <p>The Certified Web 3.0 and Metaverse program teaches about the next generation of the internet, focusing on blockchain, virtual worlds, and digital ownership. Students learn how to create decentralized apps and work with 3D virtual spaces. This certification prepares them for jobs in advanced technology fields.</p>
            </div>
           </div>
           {/* box 3 */}
           <div className="box-con-edu"> 
            <div>
                <h1 className="uni-name">Web Development</h1>
                <span>In-process</span>
            </div>
            <div className="computer">
                <h1>Cerificate of web training</h1>
                <p>The Certificate of Web Training covers the basics of building websites, including HTML, CSS, and JavaScript. It teaches how to design, structure, and make web pages interactive. This certificate helps beginners start a career in web development.</p>
            </div>
           </div>
        </main>
    )
}
export default Education