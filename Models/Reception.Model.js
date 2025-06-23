const mongoose = require('mongoose')

const ReceptionSchema = new mongoose.Schema({  // Defines the structure (schema) of the reception data in MongoDB
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String, required: true },
    requirement: { type: String, required: true },
    Comments: { type: Boolean, default: true }
}, {
    timestamps: true
});

const Reception = mongoose.model('Reception', ReceptionSchema);

module.exports = Reception;
