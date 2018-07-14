import express from 'express'
import bodyParser from 'body-parser';

import { serverPort } from '../config/main.json'

import * as db from './utils/DataBaseModel.js';

db.setUpConnection();

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello World!');
});

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log(`Сервер запущен по адресу ${serverPort} ...`);
});