const { Router } = require("express");
const auth = require("../authmiddleware");


const router = Router();


router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});


module.exports = router;
