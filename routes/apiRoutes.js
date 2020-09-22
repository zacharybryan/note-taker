var noteData = require("../db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
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
