import React from 'react'
import { postFour, postOne, postThree, postTwo } from '../../Data'
import PostArticle from './posts/PostArticle'
import PostFeatured from './posts/PostFeatured'

function Container() {
    return (
        <div id="main">
            <PostFeatured link="/" img="images/pic01.jpg" />
            
            <section className="posts">
                <PostArticle {...postOne} />
                <PostArticle {...postTwo} />
                <PostArticle {...postThree} />
                <PostArticle {...postFour} />
            </section>      
        </div>
    )
}

export default Container
