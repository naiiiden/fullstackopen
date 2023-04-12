const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
require('dotenv').config();
const Note = require('./models/note');

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>');
});

app.get('/api/notes', (req, res) => {
    Note.find({})
        .then(notes => {
            res.json(notes);
        });
});

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

app.get('/api/notes/:id', (req, res, next) => {
    Note.findById(req.params.id)
        .then(note => {
            if (note) {
                res.json(note);
            } else {
                res.status(404).end();
            }
        })
        .catch(err => next(err))
});

app.delete('/api/notes/:id', (req, res, next) => {
    Note.findByIdAndDelete(req.params.id)
        .then(result => {
            res.status(204).end();
        })
        .catch(err => next(err));
});

app.put('/api/notes/:id', (req, res, next) => {
    const body = req.body;

    const note = {
        content: body.content,
        important: body.important,
    }

    Note.findByIdAndUpdate(req.params.id, note, { new: true })
        .then(updatedNote => {
            res.json(updatedNote);
        })
        .catch(err => next(err));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

