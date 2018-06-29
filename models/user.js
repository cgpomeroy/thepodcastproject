const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    googleFirst: String,
    googleLast: String,
    googleAvatar: String
});

mongoose.model('users', userSchema);