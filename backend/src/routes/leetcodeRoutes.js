const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/leetcodeController');

router.get('/leetcode/:username', getProfile);

module.exports = router;
