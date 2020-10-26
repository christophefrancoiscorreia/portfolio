import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaGithubAlt
  } from 'react-icons/fa';
  
function PostFeatured({img, link, self, gitLink, title, text, alt}) { 
    return (
        <article className="post featured">
            <header className="major">
                <h2>My name is<br/>Christophe François</h2>
                <p>I am a passionate developer but more importantly, I consider myself as an artist. <br/>So everything I do, I try to do it in an artistic manner! Where functionality and aesthetics are just one.</p>
            </header>
            <Link to={link} target={ self ? 'self' : '_blank' } rel={ self ? '' : 'noopener noreferrer' } className="image main"><img src={img} alt="" /></Link>
            <p dangerouslySetInnerHTML={{ __html: text }} /> 
            <p style={{ display: (gitLink === '') ? 'none' : 'block'}}><Link to={gitLink} target="_blank" rel="noopener noreferrer"><FaGithubAlt /> Check git repository</Link></p>
            <ul className="actions special">
                <li><Link to={link} target={ self ? 'self' : '_blank' } rel={ self ? '' : 'noopener noreferrer' } className="button large">Check it out</Link></li>
            </ul>
        </article> 
    )
}
 
export default PostFeatured
