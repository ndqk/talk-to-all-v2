const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    username : String,
    password : String,
    email : String,
    fullname : String,
    avata : String,
    friends : [mongoose.Types.ObjectId],
    friendRequests : [mongoose.Types.ObjectId],
    requestToFriends : [mongoose.Types.ObjectId],
    notifications : []
  })

module.exports = mongoose.model('Account', AccountSchema);