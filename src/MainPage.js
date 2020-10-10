import React, { useContext } from 'react';
import Note from './Note.js';
import NotefulContext from './NotefulContext.js';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MainPage(props) {
    let { notes } = useContext(NotefulContext);
    if (props.selected) {
        notes = notes.filter(note => note.folder_id === props.selected)
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
            <Link to='/add-note' id='add-note'>Add Note</Link>
        </div>
    )
}

MainPage.propTypes = {
    selected: PropTypes.string
}