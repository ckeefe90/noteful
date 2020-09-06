import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NoteSidebar(props) {
    return (
        <div className='sidebar'>
            <Link to={`/folder/${props.folderId}`}>Go Back</Link>
            <h2 className='folder-name'>{props.folderName}</h2>
        </div>
    )
}

NoteSidebar.propTypes = {
    folderId: PropTypes.string.isRequired,
    folderName: PropTypes.string.isRequired,
}