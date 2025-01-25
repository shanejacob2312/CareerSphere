const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    resume: Object,
    blog: Array
});

module.exports = mongoose.model('User', UserSchema);
