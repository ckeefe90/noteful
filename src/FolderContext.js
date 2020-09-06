import React from 'react';

const FolderContext = React.createContext({
    folders: [],
    addFolder: () => { },
})

export default FolderContext