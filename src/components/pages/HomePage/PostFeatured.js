import React from 'react'
import { Link } from 'react-router-dom'

function PostFeatured({img, link}) { 
    return (
        <article className="post featured">
            <header className="major">
                <h2>My name is<br/>Christophe François</h2>
                <p>I am a passionate developer but more importantly, I consider myself as an artist. <br/>So everything I do, I try to do it in an artistic manner! Where functionality and aesthetics are just one.</p>
            </header>
            <Link to={link} className="image main"><img src={img} alt="" /></Link>
            <p>Featured Project description...</p>
            <p>My git hub</p>
            <ul className="actions special">
                <li><Link to={link} className="button large">Check it out</Link></li>
            </ul>
        </article> 
    )
}
 
export default PostFeatured
