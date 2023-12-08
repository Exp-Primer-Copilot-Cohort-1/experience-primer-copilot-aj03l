// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create app
const app = express();
// Create routes
const comments = require('./routes/comments');
// Use morgan for logging
app.use(morgan('combined'));
// Use body-parser to parse json data
app.use(bodyParser.json());
// Use cors for cross origin requests
app.use(cors());
// Use routes
app.use('/comments', comments);
// Listen on port 8081
app.listen(process.env.PORT || 8081);