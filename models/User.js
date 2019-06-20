const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    created_at: String
});

modula.exports = model('User', userSchema);