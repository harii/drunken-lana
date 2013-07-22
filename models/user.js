var mongoose = require("mongoose");


var userSchema = mongoose.Schema({
    name: String,
    ingredients: String   // be sure each ingredient is separated by a comma.
});
var User = mongoose.model('User', userSchema);

module.exports = User;
