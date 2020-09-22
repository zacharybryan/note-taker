var noteData = require("../db/db.json");
const fs = require("fs");
const path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        notesData = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), {encoding: "utf8"}))
        res.json(notesData);
        console.log("this is notes data", noteData);
    });

    app.post("/api/notes", function (req, res) {
            notesData.push(req.body);
            res.json(true);
    });

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        notesData.length = 0;
        res.json({ ok: true });
    });
};
