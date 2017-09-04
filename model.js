const Mongoose = require('mongoose');

const PresidentSchema = Mongoose.Schema({
  name: String,
  party: String,
  term: String,
});

const IphoneModelSchema = Mongoose.Schema({
  name: String,
  meta_route: String,
  total_wallpaper: Number,
});

export const President = Mongoose.model('President', PresidentSchema);
export const IphoneModel = Mongoose.model('IphoneModel', IphoneModelSchema);