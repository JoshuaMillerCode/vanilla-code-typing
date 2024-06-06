const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('connected', () => {
  console.log('Connected to Mongo');
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from Mongo');
});

mongoose.connection.on('error', () => {
  console.log('Something went wrong :(');
});
