import pic1 from '../Images/pic1.jpg';
import pic2 from '../Images/pic2.jpg';
import pic3 from '../Images/pic3.jpg';

const Projects = () => {
    return ( <>
      <div id="portfolio">
        <div className="container">
            <h1 className="subTitle">My Work</h1>
            <div className="work-list">
                <div className="work">
                    <img src={pic1} alt="img not found"/>
                    <div className="layer">
                        <h3>Weather App</h3>
                        <p>explore the weather of diffrent regions from this app</p>
                        <a href="https://weather-app-sheelabg.vercel.app/" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="work">
                    <img src={pic3} alt="img not found"/>
                    <div className="layer">
                        <h3>Explore Countries App</h3>
                        <p>brief information about countries of diffrent regions through this app</p>
                        <a href="https://country-app-sheelabg.vercel.app/" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="work">
                    <img src={pic2} alt="img not found"/>
                    <div className="layer">
                        <h3>Google translation</h3>
                        <p>using this app we can translate any of the sentence to different languages.</p>
                        <a href="https://translator-sheelabg.vercel.app/" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a> 
                    </div>
                </div>
            </div>
            <a href="https://github.com/SheelaBG" className="btn" target="_blank">See more</a>
            </div>
        </div>
    </> );
}
 
export default Projects;