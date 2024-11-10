import { useState } from 'react';
import './scrollTop.css'
export default function ScrollTop() {
    const [btn, setBtn] =useState("")
    window.onscroll = function () {
    if (window.scrollY >= 600) {
        setBtn("block");
    } else {
        setBtn("none");
    }
    };

    function handelClick() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
    };

    return (
        <div className="scroll">
            <button className="scroll-up" style={{display : btn}} onClick={handelClick}>Up</button>
        </div>
    )
}