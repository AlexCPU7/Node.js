import React from 'react';

//import Note from './Note.js';
import NoteEditor from './NoteEditor.js';
import NotesGrid from './NotesGrid.js';

class MyComponent extends React.Component {
    render() {
        return(
            <div className={'app'}>
                <h1>React</h1>
                <NoteEditor />
                <NotesGrid/>
            </div>
        );
    }
}

export default MyComponent;