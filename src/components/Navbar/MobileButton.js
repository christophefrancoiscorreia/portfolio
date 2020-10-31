import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Links from './Links';
import Social from './Social';

function MobileButton({alt}) {
    const [click, setClick] = useState(false);

    const handleClick = (e) => {  
        e.preventDefault();
        setClick(!click);
        document.body.classList.add('is-navPanel-visible');
    }
    const closeMobileMenu = (e) => {
        e.preventDefault();
        setClick(false);
        document.body.classList.remove('is-navPanel-visible');
    }



    return (
        <>
            <a href="#navPanel" id="navPanelToggle" className={(alt) ? 'alt' : ''} onClick={handleClick}><FaBars /> <span>Menu</span></a>
            <div id="navPanel">
                <nav>
                    <Links />
                    <Social />                    
                </nav> 
              <a href="#navPanel" className="close" style={{backgroundColor: "#fff"}} onClick={closeMobileMenu}><FaTimes /></a>
            </div>
            <div id="overlay" onClick={closeMobileMenu} style={
                (click) ? {
                    display: 'block', 
                    visibility: 'visible',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 888
                } : {
                    display: 'none'
                }
            }>

            </div>
        </>
    ) 
}

export default MobileButton
