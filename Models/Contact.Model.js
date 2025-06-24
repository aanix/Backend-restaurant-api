const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    Number: { type: String, required: true },
    email: { type: String },
    message: { type: String, required: true }
}, {
    timestamps: true
})

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact
