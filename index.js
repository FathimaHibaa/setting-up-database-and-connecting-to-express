require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use = (express.json());

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/inventoryDB';
const PORT = process.env.PORT || 3000;

connect.mongoose(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(()=> {
  console.log('Connected to MongoDB');
})

.catch((err)=>{
  console.log(`Error connecting to MongoDB: ${err}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
