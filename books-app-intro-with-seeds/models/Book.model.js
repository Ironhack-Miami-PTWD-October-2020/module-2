const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// const Schema = mongoose.Schema;
// const model = mongoose.model;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    // description: { type: String },
    description: String,
    author: { type: String, required: true },
    rating: Number
  },
  {
    timestamps: true
  }
);

// model: Book (capitalized and singular mandatory)
// collection: books (gets created based on the name of the model
// and always lowercase and plural)
module.exports = model("Book", bookSchema);
