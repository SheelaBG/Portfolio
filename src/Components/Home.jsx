import Typewriter from 'typewriter-effect';

const Home= () => {

    return ( 
       <>
        <div id="Header">
                    <div className="leftSection">
                        Hi, My name is <span className="text-red">Sheela</span>
                        <div>and Iam a passionate</div>
                        <span className="text-red">
                        <Typewriter options={{strings:["Java Full Stack developer","Web developer"],
                        autoStart:true,
                        loop:true,
                        deleteSpeed:50,

                        }}/>
                        </span>
                    </div>
        </div>

        </>
     );
}
 
export default Home;