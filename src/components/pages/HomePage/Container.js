import React from 'react'
import { postFour, postOne, postThree, postTwo, postFeatured } from '../../Data'
import PostArticle from '../../PostArticle'
import PostFeatured from './PostFeatured'

function Container() {
    return (
        <div id="main">
            <PostFeatured {...postFeatured} />
            
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
