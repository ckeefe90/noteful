import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from './NotefulContext';

export default function Note(props) {
    const {deleteNote} = useContext(NotefulContext)
    return(
        <div className='Note'>
            <h2>
                <Link to={`/note/${props.id}`}>
                    {props.name}
                </Link>
            </h2>
            <button className='note-delete' onClick={() => deleteNote(props.id)}>Delete Note</button> 
            <div>{props.modified}</div>
        </div>
    )
}