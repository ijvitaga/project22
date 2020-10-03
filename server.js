require("dotenv").config();
const { PORT, SECRET } = process.env;

const express = require("express");
const app = express();

const mongoose = require("./db/dbconn");

// ROUTERS
const authRouter = require("./controllers/auth");
const testRouter = require("./controllers/test");
const noteRouter = require("./controllers/notes")

// OTHER IMPORTS
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const morgan = require("morgan");


app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


//MIDDLEWARE
app.use(
  session({
    secret: SECRET,
    saveUninitialized: false, 
    resave: false, 
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(morgan("tiny"));

// Routers
app.get("/", (req, res) => {
  res.render("index.jsx");
});

app.use("/auth", authRouter);
app.use("/test", testRouter);
app.use("/notes", noteRouter)

// Listener
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
