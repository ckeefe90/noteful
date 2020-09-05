import React, { useContext } from 'react';
import Note from './Note.js';
import NotefulContext from './NotefulContext.js';

export default function MainPage(props) {
    let {notes} = useContext(NotefulContext);
    if (props.selected) {
        notes = notes.filter(note => note.folderId === props.selected)
    }
            
    notes = notes.map((note, index) =>
        <li key={index}>
            <Note
                {...note}
            />
        </li>)

    return(
        <div className='main-page'>
            <ul>
                {notes}
            </ul>
            <button type='submit'>Add Note</button>
        </div>
    )  
}