import React, { useState } from 'react';
import Posts from './Posts';

export default function Main(props) {

    let textref = React.createRef()
    let [posts, setPosts] = useState(props.data.posts)


    function addPost() {
        let text = textref.current.value

        if (text.trim() == '') {
            alert('Text is empty. Fill it')
            return
        }

        let newPost = {
            id: posts.length + 1,
            text: text,
            name: 'Ulybek',
            nickname: 'PI4game',
            picture: '',
            avatar_src: 'images/WhatsApp Image 2024-03-25 at 16.43 1pi4game.png'
        }

        textref.current.value = ''

        setPosts([...posts, newPost])

    }

    return (
        <main className='main'>
            <div className="post--content">
                <h4>Home</h4>
                <div className="stick-main"></div>
                <div className='user--postbutton'>
                    <div className="user">
                        <div className="img--user">
                            <img src="images/WhatsApp Image 2024-05-03 at 19.51.03.jpeg" alt="" />
                        </div>
                        <div className="post-comment">
                            <input type='text' placeholder="What's happening?!" ref={textref}></input>
                        </div>
                    </div>
                    <div className='post-button'><button type="button" onClick={addPost}>Post</button></div>
                </div>
                <div className="stick-main-1"></div>
            </div>
            <Posts posts={posts} setPosts={setPosts}></Posts>
        </main>
    )
}
