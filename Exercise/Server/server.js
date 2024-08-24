const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRoute = require('./routes/posts');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);
// MongoDB connection
mongoose.connect("mongodb+srv://shoubhik:shoubik@cluster0.tsqcxxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('Connected to database'))
  .catch((error) => console.log("whatttt"));

app.get('/', (req, res) => {
  res.send('Hello, MERN!t');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});