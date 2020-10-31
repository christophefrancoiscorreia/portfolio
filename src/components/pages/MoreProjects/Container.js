import React from 'react'
import { postFive, postSix, postSeven, postEight, postTen, postNine } from '../../Data'
import PostArticle from '../../PostArticle'

function Container() {
    return (
        <div id="main">
            <section className="posts">
                <PostArticle {...postFive} /> 
                <PostArticle {...postSix} />
                <PostArticle {...postSeven} />
                <PostArticle {...postEight} /> 
                <PostArticle {...postNine} /> 
                <PostArticle {...postTen} /> 
            </section>      
        </div>
    )
}

export default Container
