/* eslint-disable react/prop-types */

import { useState } from 'react';
import './questions.css';

const data = [
        {
            ques: 'If I participate and do not achieve results, is there a guarantee?',
            answer: 'Your guarantee is with you if you subscribe to the 3-month package and adhere to the programs throughout the subscription period and follow the instructions and do not find any result or difference. Your money will be refunded in full.'
        },
        {
            ques: 'Currently, the financial situation is not the best.. Is there a solution?',
            answer: 'With Gymnastics, we will invent a solution for you! Installments are available in two installments for the 3-month package, hero'
        },
        {
            ques: 'I can’t commit to a diet, I’m always hungry',
            answer: 'This is not a pang of real hunger; your mind is fooling you. We will work together on changing the mindset and providing your body with fibers to feel full for a longer period'
        },
        {
            ques: 'My body will be sagged and will be covered with stretch marks after losing weight',
            answer: 'This only happens after following a strict unhealthy diet which would never be provided with Diet and Cheat'
        },
        {
            ques: 'I heard that weightlifting will make me shorter',
            answer: 'Well, this is a hilarious superstition. Weightlifting never affects your height!',
        }
    ]

    

export default function Questions() {
    const [activeQuestionOne, setActiveQuestionOne] = useState(null);    
    const handleAnswerToggle = (index) => {
        // Toggle the clicked question; if the same, close it
        setActiveQuestionOne(activeQuestionOne === index ? null : index);
    };

    return (
        <div className="questions" id='Questions'>
            <div className="container">
                <h1>Frequently asked questions</h1>
                <div className="ques">
                    <QuesItems className='ques1a' data={data} activeQuestionOne={activeQuestionOne} handleAnswerToggle={handleAnswerToggle} />

                </div>
            </div>
        </div>
    );
}

function QuesItems({ data, className, activeQuestionOne, handleAnswerToggle }) {
    return (
        <div className={className}>
            <div className="box-qn">
                {data.map((item, index) => (
                    <div key={index}>
                        <h3 onClick={() => handleAnswerToggle(index)}>
                            <span>{activeQuestionOne === index ? '▼' : '►'}</span> 
                            {item.ques}
                        </h3>
                        <p style={{height: activeQuestionOne === index ? 'fit-content': 0  }}>
                            {item.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
