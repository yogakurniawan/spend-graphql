const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export default Schema({
  name: String,
  meta_route: String,
  total_wallpaper: Number,
});