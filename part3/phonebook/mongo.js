const mongoose = require('mongoose')

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
  name: process.argv[3],
  number: process.argv[4],
});

// phone.save().then(result => {
//     console.log(`added ${result.name} with number ${result.number} to phonebook`);
//     mongoose.connection.close()
// })
  
if (process.argv.length = 3) {
  Phone.find({})
  .then(result => {
      result.forEach(phone => {
          console.log(phone);
      });
      mongoose.connection.close();
  });
}
