import React, { Component } from 'react';
import Header from './Header.js';
import NotefulContext from './NotefulContext.js'
import AppSwitch from './AppSwitch.js';
import config from './config.js';
import { withRouter } from 'react-router-dom';
import NotefulError from './NotefulError.js';

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
        if (response.ok) {
          return response.json()
        }
        throw Error('Unable to load notes.')
      })
      .then(notes => {
        this.setState({ notes })
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
        if (response.ok) {
          return response.json()
        }
        throw Error('Unable to load folders.')
      })
      .then(folders => {
        this.setState({ folders })
      })
      .catch(error => {
        console.error(error)
      })
  }

  componentDidMount() {
    this.loadNotes()
    this.loadFolders()
  }

  addFolder = (folderName) => {
    console.log('adding folder', folderName)
    fetch(`${config.API_ENDPOINT}/folders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name: folderName })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw Error('Unable to add folder.')
        }
      })
      .then(folder => {
        const folders = this.state.folders.concat([folder])
        this.setState({ folders })
        this.props.history.push('/')
      })
      .catch(error => {
        console.error(error)
      })
  }

  addNote = (note) => {
    console.log('adding note', note)
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(note)
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw Error('Unable to add note.')
        }
      })
      .then(note => {
        const notes = this.state.notes.concat([note])
        this.setState({ notes })
        this.props.history.push('/')
      })
      .catch(error => {
        console.error(error)
      })
  }

  deleteNote = (noteId) => {
    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          if (this.props.location.pathname.includes('note')) {
            console.log('test')
            this.props.history.push('/')
          }
          this.setState({ notes: this.state.notes.filter(note => note.id !== noteId) })
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
    return (
      <div className="App">
        <header><Header /></header>
        <main>
          <NotefulError>
            <NotefulContext.Provider value={contextValue}>
              <AppSwitch />
            </NotefulContext.Provider>
          </NotefulError>
        </main>
      </div>
    )
  }
}

export default withRouter(App)