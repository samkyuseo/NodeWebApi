const express = require('express');

const router = express.Router();

// @route  GET api
// @desc   Test route
// @access Public

router.get('/', (req, res) => res.send('Connected to api test route'));

module.exports = router;
