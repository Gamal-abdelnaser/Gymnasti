// // import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

// // import { useState } from "react";

// export default function Scroll() {
//     // const [scroller , setScroller ] = useState(0)

//     let el = 0
//     let height = document.documentElement.scrollHeight  - document.documentElement.clientHeight; 

//     window.onscroll = () => {

//         let scrollTop = document.documentElement.scrollTop;
//         return el = `${(( scrollTop / height ) * 100)}%`;
//     }
//     return (
//         <div className={`scroller-index`} style={el} ></div>
//     )
// }