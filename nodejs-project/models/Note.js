import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title    : { type: String },
    test     : { type: String, required: true },
    color    : { type: String },
    createAt : { type: Date},
});

const Note = mongoose.model('Note', NoteSchema);