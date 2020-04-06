const mongoose = require('mongoose');

const OnlineListSchema = mongoose.Schema({
    fullname : String,
    userId : String
})

module.exports = mongoose.model('OnlineList',OnlineListSchema);
