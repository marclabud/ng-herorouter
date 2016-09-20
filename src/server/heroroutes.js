var express = require('express');
var router = express.Router();
var notes = require('./herocontroller.js');

// Returns a list of Notes
router.get("/heroes", notes.showAllNotes);

// Adds a new Note
router.post("/heroes", notes.createNote);

// Gets a Note by Id
router.get("/heroes/:id/", notes.showNote);

// Updates a Note by Id
router.put("/heroes/:id/", notes.updateNote);

// Deletes a Note by Id
//router.delete("/notes/:id/", notes.deleteNote;

module.exports = router;
