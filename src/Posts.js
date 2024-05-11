import React from 'react'
import Post from './Post'

export default function Posts(props) {
    
    function removePost(post_id){
        props.setPosts(props.posts.filter(p => p.id != post_id))
    }

    let postsHTML = props.posts.map(p => {
        return <Post removePost={removePost} id={p.id} name={p.name} nickname={p.nickname} text={p.text} picture={p.picture} avatar_src={p.avatar_src}></Post>
    })

    return (
        <div className='posts'>
            {postsHTML}
        </div>
    )
}