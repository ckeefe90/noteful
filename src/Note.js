import React from 'react';
import { Link } from 'react-router-dom';

export default function Note(props) {
    return(
        <div className='Note'>
            <h2>
                <Link to={`/note/${props.id}`}>
                    {props.name}
                </Link>
            </h2>
            <button class='note-delete'>Delete Note</button> 
            <div>{props.modified}</div>
        </div>
    )
}