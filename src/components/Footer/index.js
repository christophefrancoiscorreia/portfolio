import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    FaGithubAlt,
    FaLinkedin
  } from 'react-icons/fa';
function Footer() {

    const [scrolling, setScrolling] = useState(0);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 0){
        setScrolling(window.scrollY )            
      }else{
        setScrolling(0) 
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[])

    return (
        <>
            <footer id="footer">
                <section className="split contact">
                    <section>
                        <h3>Email</h3>
                        <p><a href="mailto:christophe.francois.correia@gmail.com?Subject=Hi there I want to contact you">christophe.francois.correia@gmail.com</a></p>
                    </section>
                    <section>
                        <h3>Social</h3>
                        <ul className="icons alt">
                            <li>
                                <Link className="icon" to={'//www.linkedin.com/in/christophe-fran%C3%A7ois-correia/'} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link className="icon" to={'//github.com/christophefrancoiscorreia'} target="_blank" rel="noopener noreferrer">
                                    <FaGithubAlt />
                                </Link>
                            </li>
                        </ul>
                    </section>
                </section>
            </footer>
            <div id="copyright">
                <ul><li>&copy; Christophe François Correia</li></ul>
            </div>
            <div class="bg" style={{transform: `translateY(${scrolling * .8}px)`}}></div>
        </>
    )
}

export default Footer
