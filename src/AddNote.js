import React, { Component } from 'react';
import NotefulContext from './NotefulContext';
import BackButton from './BackButton';

export default class AddNote extends Component {
    static contextType = NotefulContext;
    state = {
        error: null,
    }

    handleSubmit = e => {
        e.preventDefault()
        const { noteName, noteContent, folder_id } = e.target
        const note = { name: noteName.value, folder_id: folder_id.value, content: noteContent.value }
        this.context.addNote(note)
    }

    render() {
        return (<>
            <BackButton />
            <div className='AddNote__form'>
                <form

                    onSubmit={this.handleSubmit}
                >
                    <div>
                        <label htmlFor='noteName'>Note Name</label>
                        <br />
                        <input name='noteName' id='noteName' required />
                    </div>
                    <div>
                        <label htmlFor='noteName'>Note Content</label>
                        <br />
                        <input name='noteContent' id='noteContent' />
                    </div>
                    <div>
                        <label htmlFor='folder_id'>Folder</label>
                        <br />
                        <select name='folder_id' id='folder_id'>
                            {this.context.folders.map(folder =>
                                <option key={folder.id} value={folder.id}>{folder.name}</option>)}
                        </select>
                    </div>
                    <button type='submit'>Add Note</button>
                </form>
            </div>
        </>)
    }
}