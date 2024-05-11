import React, { useState } from 'react'

export default function Post(props) {
    let userref = React.createRef()
    let nameref = React.createRef()
    let textref = React.createRef()
    let likeref = React.createRef()
    let deleteref = React.createRef()

    let [likes, setLikes] = useState(0)
    let [like_status, setLike_status] = useState(0)

    // let [delete_status, setDelete_status] = useState(0)

    function like() {
        if (like_status == true) {
            likeref.current.src = 'images/image 15like.png'
            setLike_status(0)
            setLikes(likes - 1)
        } else {
            likeref.current.src = 'https://avatars.mds.yandex.net/i?id=5732ecc0ac6e40e9b4270ce7dd5c776240b3fa85-12650537-images-thumbs&n=13'
            setLike_status(1)
            setLikes(likes + 1)
        }
    }

    // function like() {
    //     if (delete_status == true) {
    //         deleteref.current.src = 'images/before cross .png'
    //         setDelete_status(0)
    //     } else {
    //         likeref.current.src = 'images/before cross .png'
    //         setDelete_status(1)
    //     }
    // }

    function postText() {
        textref.current.innerHTML = prompt('Post the text')
    }

    // function changeUser() {
    //     userref.current.style.backgroundColor = 'red'
    //     userref.current.style.color = 'white'
    //     nameref.current.style.color = 'white'
    //     userref.current.style.boxShadow = '-5px 5px 5px gray'
    // }


    return (
        <div className="full--comment">
            <div className="user" ref={userref}>
                <div className="img--user">
                    <img src={props.avatar_src} alt="" />
                </div>
                <div className="comment">
                    <div className="content--user">
                        <span><h5 ref={nameref}>{props.name}</h5>
                            <h4>{props.nicnkname}</h4></span>
                        <p ref={textref}>{props.text}</p>
                        {/* <img src={props.picture} alt="" /> */}
                    </div>
                    <div className='comment-buttons'>
                        <div className='buttons'>
                            <div className="img-main">
                                <img src="images/image 15like.png" alt="" onClick={like} ref={likeref} /> <span className="value--like">{likes}</span>
                            </div>
                            <div className="img--comment">
                                <img src="images/image 13comment.png" alt="" onClick={postText} /> <span className="value--like"></span>
                            </div>
                            <div className="img-download img-main">
                                <img src="images/Group 28upload.png" alt="" />
                            </div>
                            <img className='remove-post' src="images/before cross .png" onClick={() => props.removePost(props.id)} ref={deleteref} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='stick-main'></div>
        </div>
    )
}
