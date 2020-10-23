import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaGithubAlt,
    FaLinkedin
  } from 'react-icons/fa';
  import { BsDot } from 'react-icons/bs';

function Navbar() {
    return (
        <>
            <nav id="nav">
                <ul className="links">
                    <li className="active">
                        <Link to="/">Presentation</Link>
                    </li>
                    <li>
                        <Link to="/moreworks">
                            More works
                        </Link>
                    </li>
                    <li><span><BsDot/></span></li>
                    <li><a href="/Christophe_Correia_-_Front_end_Developer_Oct-2020.pdf" download>My CV 2020</a></li>
                </ul> 
                <ul className="icons">
                    <li>
                        <Link to={'//www.linkedin.com/in/christophe-fran%C3%A7ois-correia/'} target="_blank" rel="noopener" className="icon brands">
                            <FaLinkedin />
                        </Link>
                    </li>
                    <li>
                        <Link to={'//github.com/christophefrancoiscorreia'} target="_blank" rel="noopener" className="icon brands">
                            <FaGithubAlt/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
