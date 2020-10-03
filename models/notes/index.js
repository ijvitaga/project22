const { Schema, model } = require("mongoose");

// CREATE SCHEMA

const noteSchema = new Schema({
  username: { type: String, required: true },
  note: String,
},
{ timestamps: true }
);

const Note = model("note", noteSchema);

module.exports = Note;
