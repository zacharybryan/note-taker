const express = require("express");
const path = require("path");
const moment = require("moment");
const fs = require("fs");

const app = express();
let PORT = process.env.PORT || 3000;

// Recommended to start with this code already 
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'db')))

app.listen(PORT, function(err) {
    if (err) console.log(err);
    console.log("App listening on PORT " + PORT);
});