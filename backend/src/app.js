// src/app.js
const express = require('express');
const cors = require('cors');
const leetcodeRoutes = require('./routes/leetcodeRoutes');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/api', leetcodeRoutes);
module.exports = app;
