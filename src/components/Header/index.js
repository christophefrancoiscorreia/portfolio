import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header id="header"> 
                <Link to="/" className="logo">
                    Web Developer
                </Link>
            </header>
        </>
    )
}
 
export default Header
