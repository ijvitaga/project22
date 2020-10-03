const { Schema, model } = require("mongoose");

// CREATE SCHEMA

const noteSchema = new Schema({
  username: { type: String, required: true },
  note: {type: String},
  date: {type: String}

},
// { timestamps: true },
);

const Note = model("note", noteSchema);

module.exports = Note;
