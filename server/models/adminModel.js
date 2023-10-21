const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminID: {
        type: String,
        required: true,
        unique: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    privilages: {
        type: [String],
        required: true,
    },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;