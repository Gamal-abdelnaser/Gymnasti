import { useRef , useEffect , useState } from "react";
import {motion } from "framer-motion"
import images from './data'
import './imageSlider.css'
export default function ImageSlider() {
    const carouselRef = useRef();
    const[width , setWidth] =useState(0);

    useEffect(() => {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }, [])

    return(
        <div className="imageSlider">
            <div className="container">
                <h1>Our Heros</h1>
                <motion.div ref={carouselRef} className="carousel" whileTap={{cursor : "grabbing"}}>
                    <motion.div drag="x" dragConstraints={{right:0,left: -width }} className="inner-carousel">
                        {images.map((img ,index) => (
                           <>
                            <motion.div className="item" key={index}>
                                <img loading="lazy" src={img} alt="carousel-img" />
                            </motion.div>
                           </> 
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}