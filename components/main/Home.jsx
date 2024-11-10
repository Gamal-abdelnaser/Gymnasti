import Dumbel from '../../images/bumbels.png'
import Body from '../../images/body2.png'
import line from '../../images/line.png'
import man from '../../images/man.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
    return(
        <section id='Home' className="Home">
            <LeftSide />
            <RightSide />
            
        </section>
    )
}
const space = " "
function LeftSide() {
    return (

        <div className="component left">
            <div className="con">
                <h1>
                    Your <span>{' '} {<FontAwesomeIcon className='heart' icon={faHeartPulse} />}</span>
                    <br/> <span className="circle1"><span className="circle2"> <img loading="lazy" src={Dumbel} alt="" /> </span></span> 
                    {space} {space}Ultimate <br/> Gym partner
                </h1> 
                
                <h2 className="identifier">
                    We help you to create shape of your body and stay healthy and there will .
                </h2>
                <img loading="lazy" className='bodybuilder' src={Body} alt="" />
                <img loading="lazy" className='line' src={line} alt="" />
            </div>
           
        </div>
    )
}
function RightSide() {
    return (

        <div className="component right">
            <div className="container">
                <img loading="lazy" src={man} alt="" />
            </div>
        </div>
    )
}