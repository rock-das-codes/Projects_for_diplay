const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRoute = require('./routes/posts');
const userRoute = require("./routes/user")
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);
app.use('/user',userRoute);
// MongoDB connection
// mongoose.connect("mongodb+srv://shoubhik:shoubik@cluster0.tsqcxxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//   .then(() => console.log('Connected to database'))
//   .catch((error) => console.log(error));
mongoose.connect("mongodb+srv://shoubhik:shoubhik@cluster0.tsqcxxf.mongodb.net/FirstDB")
  .then(() => console.log('Connected to database'))
  .catch((error) => console.log(error));  

app.get('/', (req, res) => {
  res.send('Hello, MERN!t');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});