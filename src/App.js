import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import MainPage from './MainPage.js';
import dummyStore from './DummyStore.js';
import NoteSidebar from './NoteSidebar.js';
import Note from './Note.js';

export default class App extends Component {
  state = {
    notes: [],
    folders: []
  };
  render() {
    return(
      <div className="App">
        <header><Header/></header>
        <main>
          <Switch>
            <Route exact path='/' render={props => <>
              <Sidebar/>
              <MainPage/>
            </> }
            />
            <Route path="/folder/:folderId"
              render={props => {
                const {folderId} = props.match.params;
                return <>
                  <Sidebar selected={folderId}/>
                  <MainPage selected={folderId}/>
                </>
              }} />
              <Route path="/note/:noteId"
                render={props => {
                  const {noteId} = props.match.params;
                  const note = dummyStore.notes.find(n => n.id === noteId)
                  const folder = dummyStore.folders.find(f => f.id === note.folderId)
                  return <> 
                    <NoteSidebar 
                      folderName={folder.name}
                      folderId={folder.id}
                    />
                    <div class='main-page'>
                      <Note {...note} />
                      <div>{note.content}</div>
                      </div>
                  </>
                }} />
          </Switch>
        </main>
      </div>
    )
  }
}

