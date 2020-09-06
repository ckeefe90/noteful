import React, { Component } from 'react';
import NotefulContext from './NotefulContext';

export default class AddNote extends Component {
    static contextType = NotefulContext;
    state = {
        error: null,
    }

    handleSubmit = e => {
        e.preventDefault()
        const { noteName, noteContent, folderId } = e.target
        const note = { name: noteName.value, folderId: folderId.value, content: noteContent.value }
        this.context.addNote(note)
    }

    render() {
        return (
            <form
                className='AddNote__form'
                onSubmit={this.handleSubmit}
            >
                <div>
                    <label htmlFor='noteName'>Note Name</label>
                    <input name='noteName' id='noteName' required />
                </div>
                <div>
                    <label htmlFor='noteName'>Note Content</label>
                    <input name='noteContent' id='noteContent' />
                </div>
                <div>
                    <select name='folderId' id='folderId'>
                        {this.context.folders.map(folder =>
                            <option key={folder.id} value={folder.id}>{folder.name}</option>)}
                    </select>
                </div>
                <button type='submit'>Add Note</button>
            </form>
        )
    }
}