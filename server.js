const express = require("express");
const path = require("path");
const moment = require("moment");
const fs = require("fs");

const app = express();
let PORT = process.env.PORT || 3000;

// Recommended to start with this code already 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'db')))

// Create Routes
// GET '*' index.html]
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
// GET '/notes' (returns notes.html) 
app.get("/notes", function (req, res) {

    // creates variable to read json of notes
    notes = JSON.parse(fs.readFileSync(path.join(__dirname, "/db/db.json"), { encoding: 'utf-8' }));

    res.sendFile(path.join(__dirname, "public/notes.html"));

    console.log(notes);
});

app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    notes = JSON.parse(fs.readFileSync(path.join(__dirname, "/db/db.json"), { encoding: "utf-8" }));
    console.log(notes);

    newNote.routeName = newNote.title.replace(/  /g, "").toLowerCase();
    newNote.id = moment().format();

    console.log(newNote);
});

// Create API Routes
// GET '/api/notes -- read db.json and return all saved notes

// app.get("/api/notes", function(req, res) {

// })

// POST '/api/notes/:id' should receive new note to save on the request body, add to 'db.json'

// DELETE '/api/notes/:id' - should receive a query param containing the id of note to delete

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("App listening on PORT " + PORT);
});