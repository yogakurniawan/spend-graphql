const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

export default Schema({
  name: String,
  party: String,
  term: String,
});