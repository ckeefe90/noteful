import React, { Component } from 'react';
import dummyStore from './DummyStore.js';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return(
            <div className='sidebar'>
            <ul>{dummyStore.folders.map(folder =>
                <li className={folder.id === this.props.selected ?"folder selected" :"folder"}>
                    <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
                </li>)}</ul>
            <button type='submit'>Add Folder</button>
            </div>
        )
    }
}