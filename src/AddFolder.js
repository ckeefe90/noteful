import React, { Component } from 'react';
import NotefulContext from './NotefulContext';

export default class AddFolder extends Component {
    static contextType = NotefulContext;
    state = {
        error: null,
    }

    handleSubmit = e => {
        e.preventDefault()
        const { folderName } = e.target
        this.context.addFolder(folderName.value)
    }

    render() {
        return (
            <form
                className='AddFolder__form'
                onSubmit={this.handleSubmit}
            >
                <label htmlFor='folderName'>Folder Name</label>
                <input name='folderName' id='folderName' />
                <button type='submit'>Add Folder</button>
            </form>
        )
    }
}