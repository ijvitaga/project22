const { Router } = require("express");
const auth = require("../authmiddleware");
const Note = require("../../models/notes")


const router = Router();

// Routes

//INDEX
router.get("/", auth, async(req, res) => {
  try{
  const notes = await Note.find({username: req.session.username})
  res.render("notes/index.jsx", {notes})}
  catch(err){
    console.log(err);
  }
})

// New Route
router.get("/new", auth, async (req, res) => {
  res.render("notes/new.jsx")
})

// Delete Route
router.delete("/:id", auth, async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.redirect("/notes");
})

// Update Route
router.put("/edit/:id", auth, async (req, res) => {
  req.body.username = req.session.username
  await Note.findByIdAndUpdate(req.params.id, req.body)
  res.redirect("/notes/")
})

// Create Route
router.post("/", auth, async (req, res) => {
  req.body.username = req.session.username
  const newNote = await Note.create(req.body)
  res.redirect("/notes/")
})

// Edit Route
router.get("/edit/:id", auth, async (req, res) => {
  const note = await Note.findById(req.params.id)
  res.render("notes/edit.jsx", {note})
})

//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
