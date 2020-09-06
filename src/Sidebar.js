import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import PropTypes from 'prop-types';

export default function Sidebar(props) {
    const { folders } = useContext(NotefulContext)
    return (
        <div className='sidebar'>
            <ul>{folders.map(folder =>
                <li key={folder.id} className={folder.id === props.selected ? "folder selected" : "folder"}>
                    <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
                </li>)}
            </ul>
            <Link to='/add-folder' id='add-folder'>Add Folder</Link>
        </div>
    )
}

Sidebar.propTypes = {
    selected: PropTypes.string
}