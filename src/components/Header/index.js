import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const scrollToRef = (ref) => window.scrollTo({left: 0, top: ref.current.offsetTop, behavior: 'smooth'});


function Header({scrollTo}) {
    
    const myRef = useRef(null);

    if(scrollTo){
        scrollToRef(myRef);
    }

    return (
        <>
            <header id="header" ref={myRef}> 
                <Link to="/" className="logo">
                    Web Developer
                </Link>
            </header>
        </>
    )
}
 
export default Header
