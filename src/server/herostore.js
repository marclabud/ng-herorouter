var Datastore = require('nedb');
var db = new Datastore({filename: './src/server/note.db', autoload: true});

function addHero(note, callback) {
    db.insert(note, function (err, note) {
        if (callback) {
            callback(err, note);
        }
    });
}

function updateHero(id, note, callback) {
    db.update({_id: id}, note, {}, function (err, note) {
        if (callback) {
            callback(err, note);
        }
    });
}

function deleteHero(id, callback) {
    db.remove({_id: id}, function (err, note) {
        if (callback) {
            callback(err, note);
        }
    });
}

function getHero(id, callback) {
    db.findOne({_id: id}, function (err, note) {
        callback(err, note);
    });
}

function findAllHeros(callback) {
    db.find({}, function (err, notes) {
        callback(err, notes);
    });
}

module.exports = {add: addHero, update: updateHero, delete: deleteHero, get: getHero, all: findAllHeros};
