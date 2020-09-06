import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from './NotefulContext';

export default function Sidebar(props) {
    const { folders } = useContext(NotefulContext)
    return (
        <div className='sidebar'>
            <ul>{folders.map(folder =>
                <li key={folder.id} className={folder.id === props.selected ? "folder selected" : "folder"}>
                    <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
                </li>)}
            </ul>
            <Link to='/add-folder'>Add Folder</Link>
        </div>
    )
}