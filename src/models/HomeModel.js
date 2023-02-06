const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const HomeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: String | Number,
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;
