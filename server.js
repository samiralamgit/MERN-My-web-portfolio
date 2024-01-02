const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// dotenv configuration
dotenv.config();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Static files access
app.use(express.static(path.join(__dirname, './client/build')));

// routes
app.use('/api/v1/portfolio', require('./routes/routes'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
});

// port initionlized
const port = process.env.PORT || 8080;

// listen
app.listen(port, () => {
    console.log(`Server Running On PORT http://localhost:${port}`)
})