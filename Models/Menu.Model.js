const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['starter', 'main course', 'dessert', 'beverage'],
    required: true
  },
  image: { type: String },
  isAvailable: { type: Boolean, default: true }
}, {
  timestamps: true
});

const Menu = mongoose.model('Menu', MenuSchema);
module.exports = Menu;

