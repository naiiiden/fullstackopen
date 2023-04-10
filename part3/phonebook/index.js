const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(express.json());

app.use(morgan('tiny'));

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

app.get('/api/persons', (req, res) => {
    res.send(persons);
});

const generateId = () => {
  const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
  return maxId + 1;
}

app.post('/api/persons', (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(404).json({
      error: 'name or number is missing'
    });
  }

  if(persons.find((person) => person.number === body.number)) {
    return res.status(404).json({
      error: 'that number already exists in phonebook'
    });
  }


  const person = {
    "id": generateId(),
    "name": body.name,
    "number": body.number,
  }

  persons = persons.concat(person);
  res.json(person);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end(`person with ${id} does not exist`);
  }
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(person => person.id !== id);
  res.status(204).end();
});

app.get('/info', (req, res) => {
  res.send(`<div>Phonebook has info for ${persons.length} people <br/>${new Date()}</div>`);
});

app.listen(3001, () => {
    console.log(`server running on port 3001`);
});
