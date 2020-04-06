const types = require('../constants/UserConstant');
const BoxChat = require('../mongo_db/model/BoxChat');

module.exports = (socket) => {
    socket.on('OPEN_BOX_CHAT_REQUEST', boxID => {
        if(boxID){
          socket.join(boxID);
          BoxChat.findById(boxID)
            .then(res => {
              if(res){
                let data = {
                  messages : res.messages,
                  boxID : res.id
                }
                socket.emit('OPEN_BOX_CHAT_RESPONSE',data);
              }
            })
        }
        else{
          socket.emit('OPEN_BOX_CHAT_RESPONSE',null);
        }
      })
}