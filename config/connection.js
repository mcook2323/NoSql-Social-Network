// Establishes the connection to mongoDB 

const mongoose = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/socialDB';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;

dbConnection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

dbConnection.once('open', () => {
  console.log('MongoDB connected successfully!');
});

module.exports = dbConnection;
