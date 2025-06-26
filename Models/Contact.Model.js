const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }, // e.g., "India (+91)"
  countryCode: { type: String, required: true },
  number: { type: String },
  message: { type: String, required: true }
}, {
  timestamps: true
})

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact
