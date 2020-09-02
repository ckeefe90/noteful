import React from 'react';
import { Link } from 'react-router-dom';

export default function NoteSidebar(props) {
    return(
        <div className='sidebar'>
            <Link to={`/folder/${props.folderId}`}>Go Back</Link>
            <h2 className='folder-name'>{props.folderName}</h2>
        </div>
    )
}