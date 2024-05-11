import React from 'react'
import List from './List'

export default function Lists(props) {


    function removeObj(list_id) {
        props.setLists(props.lists.filter(p => p.id != list_id))
    }

    let listsHTML = props.lists.map(p => {
        return <List removeObj={removeObj} id={p.id} image={p.image} name={p.name} nickname={p.nickname} ></List>
    })
    // removeButref={removeButref}
    return (
        <div className="lists lists-component">
            <div className='outer-block-lists'>
                <div className='sample-name'>
                    <h3>Friends</h3>
                </div>
                {listsHTML}
                <button className="button-showmore">Show More</button>
            </div>
        </div>
    )
}
