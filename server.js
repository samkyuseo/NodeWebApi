const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Connect DB
connectDB();

// Define routes
app.use('/api', require('./routes/api'));
