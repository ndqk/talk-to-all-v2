const types = require('../constants/UserConstant');
const Account = require('../mongo_db/model/Account');
const BoxChat = require('../mongo_db/model/BoxChat');

module.exports = (socket) => {
    socket.on('OPEN_BOX_CHAT_NEW_REQUEST',data => {
        BoxChat.findOne({member : data})
          .then(boxchat => {
            if(boxchat){
              let data = {
                messages : boxchat.messages,
                boxID : boxchat.id
              }
              socket.emit('OPEN_BOX_CHAT_RESPONSE',data);
            }
            else{
              BoxChat.findOne({member : data.reverse()})
                .then(boxchat => {
                  if(boxchat){
                    let data = {
                      messages : boxchat.messages,
                      boxID : boxchat.id
                    }
                    socket.emit('OPEN_BOX_CHAT_RESPONSE',data);
                  }
                  else{
                    socket.emit('OPEN_BOX_CHAT_RESPONSE',{});
                  }
                })
            }
          })
      })
}