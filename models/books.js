const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBooksSchema = new Schema({
  _id: { type: String },
  title: { type: String },
  author: { type: String},
  synopsis: String,
  image: { type: String },
  link: { type: String}
});

const Book = mongoose.model("Book", googleBooksSchema);

module.exports = Book;