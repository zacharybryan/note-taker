// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var noteData = require("../db/db.json");
var path = require("path");
const fs = require("fs");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/notes", function (req, res) {
        notesData = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), {encoding: "utf8"}))
        res.sendFile(path.join(__dirname, "../public/notes.html"));
        // return res.json(notesData);
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
