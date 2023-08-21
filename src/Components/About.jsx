import { useEffect, useState } from 'react';
import bg from '../Images/bg1.png';

const About = () => {

   
    let[link,setlinks]=useState("");
    let[content,setcontent]=useState("");

    useEffect(()=>{
        var links=document.getElementsByClassName('tab-links');
        setlinks(links);
        var contents=document.getElementsByClassName('tab-contents');
        setcontent(contents);
    
    },[])

    function opentag(tabname,e)
    {
        for (let linkk of link) {
            linkk.classList.remove("active-link");//by default we added active link for skills
            
        }
        for(let contentt of content) {
            contentt.classList.remove("active-tab");//by default we added active tab for skills content
        }
       
        //above it remove on onclick of any skills tag and we add again for the same tag or current tag through tabname
        e.target.classList.add("active-link");
       // console.log(document.getElementById(tabname).classList);
        document.getElementById(tabname).classList.add("active-tab")
        
    }

    return ( 
        <>
        <div id="about">
            <div className="row">
                <div className="about-col-1">
                    <img src={bg} alt="img not found"/>
                </div>
                <div className="about-col-2">
                        <h1 className="subTitle">About me</h1>
                    <p>My name is sheela, i'm a java full stack developer Cerified by Jspiders Banglore (in the year 2023).
                        i completed my Graduation in BSC(PMCS) from Gulbarga University In the year 2017.
                        later i worked in NON-IT around 1.5 years from May 2018- Oct 2019.
                        
                    </p>
                <div className="tab-titles">
                    <p className="tab-links active-link" onClick={(e)=>{ opentag('skills',e)}}>Skills</p>
                    <p className="tab-links" onClick={(e)=>{opentag('exp',e)}}>Experience</p>
                    <p className="tab-links" onClick={(e)=>{opentag('edu',e)}}>Education</p>
                    <p className="tab-links" onClick={(e)=>{opentag('certi',e)}}>Cerification</p>
                </div>
                {/* ********************************* */}
                <div className="tab-contents active-tab" id="skills">
                    <ul>
                        <li><span>Web development</span><br/>HTML5<br/>CSS3<br/>Java Script<br/>React js<br/>
                        </li>
                        <li><span>Java Full Stack development</span><br/>Core Java<br/>JDBC<br/>Hibernate<br/>Spring Core <br/>Sring Boot<br/>Web Technologies <br/></li>
                    </ul>
                </div>
                <div className="tab-contents" id="exp">
                    <ul>
                        <li><span>Fresher</span><br/>Looking for an opprtunity to excel my skills in <span class="text-red">Software Developer Role</span></li>
                        <li><span>Customer Interface Executive</span><br/> Worked from 2018-2019.Recaero India Private Limited,Bidadi Bengaluru</li>
                        
                    </ul>
                </div>
                <div className="tab-contents" id="edu">
                   <ul>
                        <li><span>2014-2017</span><br/>BSc in PMCs (physics,Mathematics and Computer Science)<br/>
                        Govt. First Grade College, Yadgir.</li>
                        <li><span>2012-2014</span><br/>PUC in Science <br/>
                        Govt. Girls College for Girls, Gulbarga</li>
                        <li><span>2012</span><br/>SSLC <br/>
                        Mathoshri Ramabai Ambedkar High School for Girls, Wadi</li>
                    </ul>
                </div>
                <div className="tab-contents" id="certi">
                    <ul>
                        <li><span>2023</span><br/>Java Full Stack Developer Certified by <br/>
                          Jspiders Basavangudi,Bengaluru</li>
                        
                    </ul>
                </div>
                </div>
            </div>
    </div>
        </>
    );
}
 
export default About;