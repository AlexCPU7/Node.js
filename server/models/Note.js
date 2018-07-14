import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoreSchema = new Schema({
    title: {type: String},
    text: {type: String, required: true},
    color: {type: String},
    create_dt: {type: Date},
});

const Note = mongoose.model('Note', NoreSchema);