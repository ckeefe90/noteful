import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar.js';
import MainPage from './MainPage.js';
import NoteSidebar from './NoteSidebar.js';
import Note from './Note.js';
import NotefulContext from './NotefulContext.js'
import AddFolder from './AddFolder.js';
import AddNote from './AddNote.js';

export default function AppSwitch() {
    const { notes, folders } = useContext(NotefulContext);
    return (
        <Switch>
            <Route exact path='/' render={props =>
                <>
                    <Sidebar />
                    <MainPage />
                </>}
            />
            <Route path="/folder/:folder_id"
                render={props => {
                    const { folder_id } = props.match.params;
                    return <>
                        <Sidebar selected={folder_id} />
                        <MainPage selected={folder_id} />
                    </>
                }} />
            <Route path="/note/:noteId"
                render={props => {
                    const { noteId } = props.match.params;
                    const note = notes.find(n => n.id === Number(noteId))
                    const folder = folders.find(f => f.id === note.folder_id)
                    return <>
                        <NoteSidebar
                            folderName={folder.name}
                            folder_id={folder.id}
                        />
                        <div className='main-page'>
                            <Note {...note} />
                            <div>{note.content}</div>
                        </div>
                    </>
                }} />
            <Route path="/add-folder" component={AddFolder} />
            <Route path="/add-note" component={AddNote} />
        </Switch>
    )
}