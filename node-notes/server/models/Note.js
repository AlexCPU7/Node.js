const  mongoose = required('mongoose');

const Schema = mongoose.Schema;

const NoteShema = new Schema({
    title: {type: String}
});