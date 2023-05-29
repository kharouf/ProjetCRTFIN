// getting-started.js
const mongoose = require('mongoose');

const connectDB = async () => {
const URLDB=process.env.URLDB;

  try {
     await mongoose.connect(URLDB);
     // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
     console.log('Data base is connected');

  } catch (error) {
    console.log(error)
    
  }
  
  
}
module.exports = connectDB