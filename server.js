const express = require("express");
const path = require("path");
const moment = require("moment");
const fs = require("fs");

const app = express();
let PORT = process.env.PORT || 3000;

// Recommended to start with this code already 
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'db')))

const note = [];



// Create Routes

// GET '*' index.html]
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
// GET '/notes' (returns notes.html) 
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Create API Routes

// GET '/api/notes -- read db.json ad return all saved notes

// POST '/api/notes/:id' should receive new note to save on the request body, add to 'db.json'

// DELETE '/api/notes/:id' - should receive a query param containing the id of note to delete

app.listen(PORT, function(err) {
    if (err) console.log(err);
    console.log("App listening on PORT " + PORT);
});