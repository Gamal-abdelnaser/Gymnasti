import './tallent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import Man2 from '../../images/man2.png'

export default function Tallent(){
    return(
        <div className="tallent">
            <div className="container">
                <div className="explore">
                    <div className="image-container">
                        <img loading="lazy" src={Man2} alt="man" />
                    </div>
                    <div className="content">
                        <h2>Explore our gym center</h2>
                        <p>We are here to help you</p>
                    </div>
                    
                </div>
                <div className="category">
                    <div className="box">
                        <FontAwesomeIcon className='icoo'  icon={faHeartPulse}/>
                        <h2 >Small group training</h2>
                        <p> Transaction analysis for  proactive personalized service.</p>
                    </div>
                    {/* <div className="box">
                        <FontAwesomeIcon style={{fontSize: 35 , color: '#eb8e40'}} icon={faHeartPulse} />
                        <h2>Free membership</h2>
                        <p> Transaction analysis for proactive personalized service.</p>
                    </div> */}
                </div>
            </div>
            
        </div>
    )
}