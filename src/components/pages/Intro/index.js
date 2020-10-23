import React, { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import Header from '../../Header';


function Intro() {
    const [hidden, setHidden] = useState(false);

    
    const handleIntroScroll = () => {
        setHidden(!hidden)
    }; 

    return (
        <>
            <div id="intro" className={ hidden ? 'hidden' : '' }>
                <h1>This is my<br /> 
                Portfolio</h1>
                <p>A show case of my projects and my abilities.</p>
                <ul className="actions">
                    <li>
                        <button className="button icon solid solo scrolly" onClick={handleIntroScroll}>
                            <FaArrowDown />
                        </button>
                    </li>
                </ul>
            </div> 
            <Header scrollTo={hidden ? true : false} />
        </>
    )
}

export default Intro
