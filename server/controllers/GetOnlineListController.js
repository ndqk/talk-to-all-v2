const OnlineList = require('../mongo_db/model/OnlineList');
const Account = require('../mongo_db/model/Account');

module.exports = (socket,io) => {
    socket.on('GET_ONLINE_LIST_REQUEST', memberID => {
      Account.find({_id : {$in: memberID}})
        .then(res => {
          let data = res.map(data => {
            return {
              id : data.id,
              fullname : data.fullname
            }
          })
          socket.emit('GET_ONLINE_LIST_RESPONSE',data)
        });
    })
}