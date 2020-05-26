const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

connectDB();

app.get('/', (req, res) => res.send('API Running'));
