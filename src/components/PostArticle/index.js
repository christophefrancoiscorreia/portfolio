import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaGithubAlt
  } from 'react-icons/fa';

function PostArticle({img, link, self, gitLink, title, text, alt}) {
    

    return (
        <>
            <article>
                <header>
                    <h2><Link to={link} target={ self ? 'self' : '_blank' } rel={ self ? '' : 'noopener' } dangerouslySetInnerHTML={{ __html: title }} /></h2>
                </header>
                <Link to={link} target={ self ? 'self' : '_blank' } rel={ self ? '' : 'noopener' } className="image fit"><img src={img} alt={alt} /></Link>
                <p dangerouslySetInnerHTML={{ __html: text }} />      
                <p style={{ display: (gitLink === '') ? 'none' : 'block'}}><Link to={gitLink}><FaGithubAlt /> Check git repository</Link></p>
                <ul className="actions special">
                    <li><Link to={link} target={ self ? 'self' : '_blank' } rel={ self ? '' : 'noopener' } className="button">Check it out</Link></li>
                </ul> 
            </article>
        </>
    ) 
}

export default PostArticle
