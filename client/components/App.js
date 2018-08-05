import React from 'react';

//import Note from './Note.js';
import NoteEditor from './NoteEditor.js';
import NotesGrid from './NotesGrid.js';

class App extends React.Component {
    handleNoteAdd(data){
        console.log(data);
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