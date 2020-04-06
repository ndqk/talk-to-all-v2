const types = require('../constants/UserConstant');
const OnlineList = require('../mongo_db/model/OnlineList');

module.exports = (socket,io) => {
    socket.on(types.LOGOUT_REQUEST, userId => {
        OnlineList.deleteOne({userId : userId})
          .then(() => {
            OnlineList.find({})
              .then(res => {
                io.emit('RECEIVE_ONLINE_LIST', res);
              })
          })
      })
}