import React, { useState } from 'react'
import Lists from './Lists'

export default function MainLists(props) {
    let [lists, setLists] = useState(props.data.lists)

    function addList() {
        let name = prompt('Name of friend')
        let nickname = prompt('Start with @')
        let urlimg = prompt('URL of picture')

        if (name.trim() == '' && nickname.trim() == '' && urlimg.trim() == '') {
            alert('Fill all requests!')
            return
        }

        let newFriend = {
            id: lists.length + 1,
            name: name,
            nickname: nickname,
            image: urlimg
        }

        setLists([...lists, newFriend])
    }


    return (
        <div className="lists--page">
            <div className="more-compenents">
                <div className="search-button">
                    <img src="images/image 4search.png" alt="" />
                    <input type="text" placeholder="Type new list" />
                </div>
                <a href='#' className="lists-img-button" onClick={addList}>
                    <img src="images/lists.png" alt="" />
                </a>
            </div>
            <Lists lists={lists} setLists={setLists}></Lists>
            <div className='stick-main'></div>
        </div>
    )
}
