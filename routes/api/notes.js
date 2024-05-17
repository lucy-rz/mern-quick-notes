const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/check-notes', ensureLoggedIn, notesCtrl.check);

router.post('/write-note', ensureLoggedIn, notesCtrl.write);

module.exports = router;