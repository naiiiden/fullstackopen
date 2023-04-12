// const mongoose = require('mongoose')

// const url =
//   `mongodb+srv://fullstack:${password}@cluster0.6gnwje6.mongodb.net/noteApp?retryWrites=true&w=majority`

// mongoose.set('strictQuery',false)
// mongoose.connect(url)

// const noteSchema = new mongoose.Schema({
//   content: String,
//   important: Boolean,
// })

// const Note = mongoose.model('Note', noteSchema)

// Note.find({})
// .then(result => {
//     result.forEach(note => {
//         console.log(note);
//     });
//     mongoose.connection.close();
// });