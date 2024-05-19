const Note = require('../../models/note');
require('dotenv').config();

module.exports = {
    check,
    write,
};

async function check(req, res){
    const allNotes = await Note.find({user: req.body});
    res.json(allNotes);
    console.log(req.body)
};

async function write(req, res){
    const writeNote = await Note.create(req.body);
    res.status(200).json('haz post it')
};