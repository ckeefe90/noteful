import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import PropTypes from 'prop-types';

export default function Note(props) {
    const { deleteNote } = useContext(NotefulContext)
    return (
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

Note.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    modified: PropTypes.string,
}