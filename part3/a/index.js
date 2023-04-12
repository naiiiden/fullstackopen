const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
require('dotenv').config();
const Note = require('./models/note');

// let notes = [
//     {
//       id: 1,
//       content: "HTML is easy",
//       important: true
//     },
//     {
//       id: 2,
//       content: "Browser can execute only JavaScript",
//       important: false
//     },
//     {
//       id: 3,
//       content: "GET and POST are the most important methods of HTTP protocol",
//       important: true
//     }
// ]

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>');
});

app.get('/api/notes', (req, res) => {
    Note.find({})
        .then(notes => {
            res.json(notes);
        });
});

const generateId = () => {
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => n.id))
        : 0
    return maxId + 1;
}

app.post('/api/notes', (req, res) => {
    const body = req.body;
    
    if (body.content === undefined) {
        return res.status(404).json({ error: 'content missing' });
    }

    const note = new Note({
        content: body.content,
        important: body.important || false,
    })

    note.save().then(savedNote => {
        res.json(savedNote);
    })
});

app.get('/api/notes/:id', (req, res) => {
    Note.findById(req.params.id)
    .then(note => {
        res.json(note);
    })
});

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    notes = notes.filter(note => note.id !== id);
    res.status(204).end();
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
