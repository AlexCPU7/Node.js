import React from 'react';

import NotesActions from '../actions/NotesActions.js'
import NotesStore from '../stores/NotesStore.js'

import NoteEditor from './NoteEditor.js';
import NotesGrid from './NotesGrid.js';

function getStateFromFlux() {
    return {
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        getStateFromFlux();
    }
    componentWillMount() {
        NotesActions.loadNotes();
    };

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange);
    };

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange);
    };

    handleNoteDelete(note) {
        NotesActions.deleteNote(note.id);
    };

    handleNoteAdd(date) {
        NotesActions.createNote(date);
    };

    render() {
        return(
            <div className={'app'}>
                <h1>React</h1>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid/>
            </div>
        );
    }
}

export default App;