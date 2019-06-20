var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "An author needs a name"], unique: [true], minlength: [3, "An author name must be 3 characters or more"], maxlength: [20, "TOO LONG OF A NAME... Do you have a nickname?"]},
    liked: { type: Boolean, default: false },
    like_count: { type: Number, default: 0 },
}, {timestamps: true});

AuthorSchema.plugin(uniqueValidator, {message: "{VALUE} already exists!"});
module.exports = mongoose.model('Author', AuthorSchema);
const Author = mongoose.model('Author');