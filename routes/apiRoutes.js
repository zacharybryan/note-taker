// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var noteData = require("../db/db.json");
const fs = require("fs");
const path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        notesData = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), { encoding: "utf8" }))
        res.json(notesData);
        console.log("this is notes data", noteData);
    });

    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        notesData = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), { encoding: "utf8" }));

        newNote.routeName = newNote.title.replace(/ /g, "").toLowerCase();
        console.log("new note", newNote);

        notesData.push(newNote);

        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notesData, null, 4), function(err) {
            if (err) console.log(err);

            console.log("note added");
        })

        res.json(newNote);
    });

    app.delete("/api/notes/", function (req, res) {
        // Empty out the arrays of data
        notesData.length = 0;
        res.json({ ok: true });
    });
};
