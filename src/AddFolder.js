import React, { Component } from 'react';
import NotefulContext from './NotefulContext';
import BackButton from './BackButton';

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
        return (<>
            <BackButton />
            <div className='AddFolder__form'>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor='folderName'>Folder Name</label>
                    <br />
                    <input name='folderName' id='folderName' />
                    <br />
                    <button type='submit'>Add Folder</button>
                </form>
            </div>
        </>)
    }
}