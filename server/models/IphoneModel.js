const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IphoneModelSchema = Schema({
  name: String,
  meta_route: String,
  total_wallpaper: Number
});

export default Mongoose.model('IphoneModel', IphoneModelSchema);