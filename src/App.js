import React, { Component } from 'react';
import Header from './Header.js';
import NotefulContext from './NotefulContext.js'
import AppSwitch from './AppSwitch.js';
import config from './config.js';
import { withRouter } from 'react-router-dom';

class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  loadNotes() {
    fetch(`${config.API_ENDPOINT}/notes`, {
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      }
    throw Error('Unable to load notes.')
    })
    .then(notes => {
      this.setState({notes})
    })
    .catch(error => {
      console.error(error)
    })
  }

  loadFolders() {
    fetch(`${config.API_ENDPOINT}/folders`, {
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      }
    throw Error('Unable to load folders.')
    })
    .then(folders => {
      this.setState({folders})
    })
    .catch(error => {
      console.error(error)
    })
  }

  componentDidMount() {
    this.loadNotes()
    this.loadFolders()
  }

  addFolder() {

  }

  addNote() {

  }

  deleteNote = (noteId) => {
    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => {
      if(response.ok) {
        if(this.props.location.pathname.includes('note')) {
          console.log('test')
          this.props.history.push('/')
        }
        this.setState({notes: this.state.notes.filter(note => note.id !== noteId)})
      } else {
        throw Error('Unable to delete note.')
      }
    })
    .catch(error => {
      console.error(error)
    })
  }

  render() {
    const contextValue = {
      ...this.state, 
      addFolder: this.addFolder, 
      addNote: this.addNote, 
      deleteNote: this.deleteNote
    }
    return(
      <div className="App">
        <header><Header/></header>
        <main>
          <NotefulContext.Provider value={contextValue}>
          <AppSwitch/>
          </NotefulContext.Provider>
        </main>
      </div>
    )
  }
}

export default withRouter(App)