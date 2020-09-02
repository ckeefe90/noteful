import React from 'react';
import dummyStore from './DummyStore.js';
import Note from './Note.js';

export default function MainPage(props) {
    return(
        <div className='main-page'>
        <ul>{dummyStore.notes
        .filter(note => note.folderId === props.selected)
        .map(note =>
            <li>
                <Note
                    {...note}
                />
            </li>)}
        </ul>
        <button type='submit'>Add Note</button>
        </div>
    )
}