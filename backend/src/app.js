// src/app.js
const express = require('express');
const cors = require('cors');
const leetcodeRoutes = require('./routes/leetcodeRoutes');

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/api', leetcodeRoutes);
module.exports = app;
