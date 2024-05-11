import React, { useState } from 'react'

export default function List(props) {
    let removeButref = React.createRef()
    // let [remove_status, setremove_status] = useState(0)
    let [remove_status, setremove_status] = useState(0)

    if (remove_status == true) {
        removeButref.current.src = 'images/after cross.png'
        return
    }

    return (
        <div className="type-list">
            <div className="type-account">
                <img src={props.image} alt="" />
                <div className="type-name">
                    <h4>{props.name}</h4>
                    <h5>{props.nickname}</h5>
                </div>
            </div>
            <a className='remove-button' href='#' onClick={() => props.removeObj(props.id)} ref={removeButref} ><img src='images/before cross .png' alt='' /></a>
        </div>
    )
}
