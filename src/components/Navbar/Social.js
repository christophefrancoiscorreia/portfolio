import React from 'react'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Social() {
    return (
        <>
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
        </>
    )
}

export default Social
