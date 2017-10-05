const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const PresidentSchema = Schema({
  name: String,
  party: String,
  term: String,
});

export default mongoose.model('President', PresidentSchema);