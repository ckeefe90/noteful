import React, { useContext } from 'react';
import Note from './Note.js';
import NotefulContext from './NotefulContext.js';
import { Link } from 'react-router-dom';

export default function MainPage(props) {
    let { notes } = useContext(NotefulContext);
    if (props.selected) {
        notes = notes.filter(note => note.folderId === props.selected)
    }

    notes = notes.map((note, index) =>
        <li key={index}>
            <Note
                {...note}
            />
        </li>)

    return (
        <div className='main-page'>
            <ul>
                {notes}
            </ul>
            <Link to='/add-note'>Add Note</Link>
        </div>
    )
}