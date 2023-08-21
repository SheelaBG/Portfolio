import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    let[menu,setmenu]=useState("0px");

    useEffect(()=>{
      var sidemenu=document.getElementById("sidemenu");
      setmenu(sidemenu)
      console.log(sidemenu);
    },[])

    function openmenu()
    {
         menu.style.right="0px";
    }

    function closemenu()
    {
         menu.style.right="-100px";
    }

    return ( 
        <>
        <nav>
            <div id="logo">Portfolio</div>
                <ul id="sidemenu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="services">Services</Link></li>
                        <li><Link to="projects">Portfolio</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                        <i className="fa-solid fa-xmark" onClick={closemenu}></i>
                </ul>
                <i className="fa-solid fa-bars" onClick={openmenu}></i>
        </nav>
        </>
     );
}
 
export default Navbar;