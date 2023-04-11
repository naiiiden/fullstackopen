const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('number must be longer')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.6gnwje6.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const phoneSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Phone = mongoose.model('Phone', phoneSchema)

const phone = new Phone({
    name: "Nano",
    number: "555-333-111",
});

phone.save().then(result => {
  console.log('phone saved!')
  mongoose.connection.close()
})