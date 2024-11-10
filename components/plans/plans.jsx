import { useState } from "react";
import './plans.css'

export default function Plans() {

    const description ={
        silver :[
            'Personalized Diet Plan',
            'Training Plan Home or Gym',
            'Recipes Video',
            'Supplement Plan',
            
        ],
        Gold :[
            'Personalized Diet Plan',
            'Training Plan Home or Gym',
            'Recipes Video',
            'Supplement Plan',
            'Direct Phone Call 24/7',
            'Answer Questions in 24/7',
            'Evaluation'
        ],
        Vip :[
            'Personalized Diet Plan',
            'Training Plan Home or Gym',
            'Recipes Video',
            'Supplement Plan',
            'Direct Phone Call 24/7',
            'Answer Questions in 24/7',
            'Evaluation',
            'Customized Clinical & Nutrition Medical Care from Doctors',
            '4 Zoom meetings Monthly',
            'Whatsapp Priority',
            'Messages Daily Follow Up & Motivation',
            'Direct Phone Call',
            '1 : 1 workout sessions/month',
            'Exclusive Content',
            'Exclusive Calculators'
        ]
        
    } 
    const [Card , setCard  ] = useState(0)
    // console.log(Card);
    
    function handeleClick(price) {
        setCard(Number(price))
       
    }

  return (
    <div id='Programs' className="plans">
        <div className="container">
            <Box  old={'250$'} price={`200`} title="Silver Plan" gif='checklist.gif' details={description.silver}  via='Email' handeleClick={handeleClick}/>
            <Box  old={'400$'} price={`300`}title="Gold Plan" gif='doctors.gif' details={description.Gold} via='Email' handeleClick={handeleClick}/>
            <Box  old={'700$'} price={'500'} title="Vip Plan" gif='user.gif' details={description.Vip} via='WhatsApp' handeleClick={handeleClick}/>
        </div>
    </div>
  )
}

function Box(prop ) {

    return (
        <div className="box" >
                <h1>{prop.title}</h1>
                <div className="gif-container">
                    <img loading="lazy" src={prop.gif} alt=""/>    
                </div>
                <ul>
                    {prop.details.map((item) => <li key={item}> {item} </li>)}
                </ul>
                <select name="" id="" >
                    <option value="1 Month">1 Month</option>
                    {/* <option value="2 Month">2 Month</option>
                    <option value="3 Month">3 Month</option> */}
                </select>
                <h2><span>Price :  </span>{`${prop.price}$`}  <span className='old'>{prop.old}</span></h2> 
                <button className="get-plan-btn" onClick={() => prop.handeleClick(prop.price)}>Get Plan</button>
        </div>
    )
}