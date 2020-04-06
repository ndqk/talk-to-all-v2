const mongoose = require('mongoose');

const BoxChatSchema = mongoose.Schema({
    boxType : String,
    boxName : String,
    member : [{
      _id : false,
      userID : mongoose.Types.ObjectId,
      fullname : String
    }],
    messages : [{
      _id : false,
      from : mongoose.Types.ObjectId,
      message : String
    }],
  })

module.exports = mongoose.model('BoxChat', BoxChatSchema);