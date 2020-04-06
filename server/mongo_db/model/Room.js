const mongoose = require('mongoose');

const BoxChatSchema = mongoose.Schema({
    nameRoom : String,
    member : [],
    messages : [{
      _id : false,
      from : mongoose.Types.ObjectId,
      avata : String,
      fullname : String,
      message : String
    }],
  })

module.exports = mongoose.model('Room', BoxChatSchema);