import React, { useState, useRef } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function Intro() {
    const [hidden, setHidden] = useState(false);
    const myRef = useRef(null)

    
    const handleIntroScroll = () => {
        setHidden(!hidden)
        scrollToRef(myRef)
    };

    return (
        <div id="intro" className={ hidden ? 'hidden' : '' }>
            <h1>This is my<br /> 
            Portfolio</h1>
            <p>A show case of my projects and my abilities.</p>
            <ul class="actions">
                <li>
                    <Link to={'#header'} className="button icon solid solo scrolly" onClick={handleIntroScroll}>
                        <FaArrowDown />
                    </Link>
                </li>
            </ul>
        </div> 
    )
}

export default Intro
