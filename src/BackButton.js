import React from 'react';
import { Link } from 'react-router-dom';

export default function BackButton() {
    return (
        <div className='backButton'>
            <ul>
                <Link to={'/'}>Go Back</Link >
            </ul>
        </div>
    )
}