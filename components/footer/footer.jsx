/* eslint-disable react/prop-types */

import './footer.css'
export default function Footer() {

    return (
        <div id='Contact' className="footer">
            <div className="container">
                <div className="content">       
                    <div className="logo">
                        <h1> <a href="">Gym<span>nastic</span></a></h1>
                        <p>Joun Us Now !</p>
                        <div className="icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                    <div className="Overview">
                        <h2>Overview</h2>
                        <MenuList />
                    </div>
                    <div className="company">
                        <h2>Company</h2>
                        <p><a href="#">Privacy Police</a></p>
                        <p><a href="#">Terms and conditions</a></p>
                    </div>
                </div>
                <div className="developed">
                    <div className='ttt'>
                        <span className='first-letter'>
                            <span style={{color: '#000' }}> {` < `} </span>
                            <span style={{color: '#ba3823'}}> Developed By </span>
                            <span style={{color: '#000'}}>{` > `}</span>
                        </span>
                        <span className='second-letter'>
                            <a href="https://www.facebook.com/gamal.abdelnaser.54584982?mibextid=PqCCtK4hzfj4vNSU">Gematic</a> 
                        </span>
                    </div>
                    
                    <span className='third-letter'>
                        <span style={{color: '#000'}}>{` < `}</span>
                        <span style={{color: '#ba3823'}}>All Copy Rights Reserved @2024</span>
                        <span style={{color: '#000'}}>{`  > `}</span>
                    </span>
                </div>
                
            </div>
        </div>
    )
}


export function MenuList() {

    return(
        <ol className="links">
            <ListItems className={'active'} name={'Home'} />
            <ListItems name={'Program'} />
            <ListItems name={'Questions'} />
            <ListItems name={'Contact'} />
        </ol>
    )
}

function ListItems({name, className}) {
    return(
        <li>
            <a href={`#${name}`} className={className}>{name}</a>
        </li>
    )
}