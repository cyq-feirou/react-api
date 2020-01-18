const mongoose = require('./db.js');
const schema = mongoose.Schema;
const userSchema = new schema({
    email: { type: String },
    name: { type: String },
    password: { type: String }
})
const user = mongoose.model('user',userSchema);

module.exports =  user;