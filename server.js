const express = require('express');
const mongoose = require('mongoose');
const Book = require('./book')
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const app = express();
const port = process.env.PORT || 5000;
app.use(cors())

const bookRoute = require('./books');

app.use('/books', bookRoute);

// Simple Hello World Page
app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

// Listens on port 5000
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});