const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(express.json());

const mongoose = require('mongoose')

// DO NOT SAVE YOUR PASSWORD TO GITHUB!!
const url =
  `mongodb+srv://fullstack:fso@cluster0.6gnwje6.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const phoneSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Phone = mongoose.model('Phone', phoneSchema)

morgan.token('body', req => {
  return JSON.stringify(req.body);
  // https://stackoverflow.com/questions/67496399/how-to-get-the-request-body-in-morgan-middleware
});

app.use(morgan(':method :url :body'));

// let persons = [
//     { 
//       "id": 1,
//       "name": "Arto Hellas", 
//       "number": "040-123456"
//     },
//     { 
//       "id": 2,
//       "name": "Ada Lovelace", 
//       "number": "39-44-5323523"
//     },
//     { 
//       "id": 3,
//       "name": "Dan Abramov", 
//       "number": "12-43-234345"
//     },
//     { 
//       "id": 4,
//       "name": "Mary Poppendieck", 
//       "number": "39-23-6423122"
//     }
// ];

app.get('/api/persons', (req, res) => {
  Phone.find({}).then(persons => {
    res.json(persons)
  })
});

const generateId = () => {
  const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
  return maxId + 1;
}

app.post('/api/persons', (req, res) => {
  // const body = req.body;

  // if (!body.name || !body.number) {
  //   return res.status(404).json({
  //     error: 'name or number is missing'
  //   });
  // }

  // if(persons.find((person) => person.number === body.number)) {
  //   return res.status(404).json({
  //     error: 'that number already exists in phonebook'
  //   });
  // }


  // const person = {
  //   "id": generateId(),
  //   "name": body.name,
  //   "number": body.number,
  // }

  // persons = persons.concat(person);
  // res.json(person);

  const body = req.body;
    
    if (body.number === undefined) {
        return res.status(404).json({ error: 'please add a number' });
    }

    const phone = new Phone({
        "name": body.name,
        "number": body.number,
    })

    phone.save().then(savedPhone => {
        res.json(savedPhone);
    })
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
