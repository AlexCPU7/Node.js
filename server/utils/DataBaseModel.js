import mongoose from 'mongoose';

import '../models/Note.js';

import config from '../../config/main.json';

const Note = mongoose.model('Note');

export function setUpConnection(){
    mongoose.connect(`mongodb://${config.db.host}/${config.db.name}`);
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        create: new Date()
    });

    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remote();
}

