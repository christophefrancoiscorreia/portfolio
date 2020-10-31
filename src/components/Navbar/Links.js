import React from 'react'
import { BsDot } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'

function Links() {
    const location = useLocation();

    return (
        <>
            <ul className="links">
                <li className={ (location.pathname === "/") ? 'active' : '' }>
                    <Link to="/">Presentation</Link>
                </li>
                <li className={ (location.pathname === "/more-projects") ? 'active' : '' }>
                    <Link to="/more-projects">
                        More Projects
                    </Link>
                </li>
                <li><span><BsDot/></span></li>
                <li><a href="/Christophe_Correia_-_Front_end_Developer_Oct-2020.pdf" download>My CV 2020</a></li>
            </ul> 
        </>
    )
}

export default Links
