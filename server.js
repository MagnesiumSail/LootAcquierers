const express = require('express');
const app = express();
const port = process.env.PORT || 2080;
const routes = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


// Middleware

app.use(express.json()); // Parse JSON bodies

// All routes go through routes/index.js
app.use('/', routes);

// Error handling

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
