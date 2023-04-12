const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(express.json());
require('dotenv').config();
const Phone = require('./models/persons');

morgan.token('body', req => {
  return JSON.stringify(req.body);
  // https://stackoverflow.com/questions/67496399/how-to-get-the-request-body-in-morgan-middleware
});

app.use(morgan(':method :url :body'));

app.get('/api/persons', (req, res) => {
  Phone.find({}).then(persons => {
    res.json(persons)
  })
});

app.post('/api/persons', (req, res) => {
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

app.get('/api/persons/:id', (req, res, next) => {
  Phone.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })
    .catch(err => next(err));
});

app.delete('/api/persons/:id', (req, res, next) => {
  Phone.findByIdAndDelete(req.params.id)
    .then(result => res.status(204).end)
    .catch(err => next(err));
});

app.get('/info', (req, res) => {
  res.send(`<div>Phonebook has info for ${persons.length} people <br/>${new Date()}</div>`);
});

app.listen(process.env.PORT, () => {
    console.log(`server running on port 3001`);
});
