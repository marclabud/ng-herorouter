var store = require("./noteStore.js");
var system = require("../../node_modules/systemjs/dist/system.js");
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports.createNote = function (req, res) {
    var newNote = mapBodyToNote(req);
    console.log("Create Note: " + JSON.stringify(newNote));

    store.add(newNote, function (err, note) {
        if (note === undefined) {
            res.statusCode = 404;
            return res.send('Note not found!');
        }
    });
    //res.end("");
    res.end(JSON.stringify(newNote));
};


module.exports.showNote = function (req, res) {

    store.get(req.params.id, function (err, note) {
        if (note === undefined) {
            res.statusCode = 404;
            return res.send('Hero not found!');
        }
        //res.end(JSON.stringify(note));
        res.json(note);
    });

};

module.exports.showAllNotes = function (req, res) {
    store.all(function (err, notes) {
        if (notes === undefined) {
            res.statusCode = 404;
            return res.send('Hero not found!');
        }
        res.json(notes);
    });
};

module.exports.updateNote = function (req, res) {
    var updatedNote = mapBodyToNote(req);
    console.log("Update Note: " + JSON.stringify(updatedNote));

    store.update(req.params.id, updatedNote, function (err, note) {
        if (note === undefined) {
            res.statusCode = 404;
            return res.send('Hero not found!');
        }
        //res.end(JSON.stringify(note));
        res.json(note);
    });
};

function mapBodyToNote(req) {
    var note = system.import("../noteservice/Note.js");
    note._id = req.body.id;
    note.id = Number(req.body.id);
    note.title = req.body.title;
    note.description = req.body.description;
    note.importance = req.body.importance;
    note.createdDate = req.body.createdDate;
    note.dueDate = req.body.dueDate;
    note.finishedDate = req.body.finishedDate;
    return note;
}