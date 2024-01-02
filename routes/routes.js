const express = require('express');
const { sendEmailController } = require('../controllers/controllers');

// router Object
const router = express.Router();

router.post('/send-email', sendEmailController);

module.exports = router;