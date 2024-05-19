const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/checknotes', ensureLoggedIn, notesCtrl.check);

router.post('/writenote', ensureLoggedIn, notesCtrl.write);

module.exports = router;