const types = require('../constants/UserConstant');
const Account = require('../mongo_db/model/Account');

module.exports = (socket) => {
    socket.on('GET_USER_REQUEST',userID => {
        Account.findById(userID)
          .then(user => {
            if(user){
              socket.join(user.id);
              let {id,fullname,email,friends,avata,friendRequests,requestToFriends,notifications} = user;
              socket.emit('GET_USER_RESPONSE',{id,fullname,email,friends,avata,friendRequests,requestToFriends,notifications})
            }
          })
      })
}