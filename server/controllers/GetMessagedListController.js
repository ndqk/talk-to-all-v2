const types = require('../constants/UserConstant');
const BoxChat = require('../mongo_db/model/BoxChat');

module.exports = (socket) => {
    socket.on('GET_MESSAGED_LIST_REQUEST', req => {
        BoxChat.find({_id : {$in : req.messagedListID}})
          .then(res => {
            if(res){
                let list = res.map(data => {
                  let boxName = '';
                  if(data.boxType === 'Personal'){
                    data.member.map(dt => {
                      if(req.userID != dt.userID){
                        boxName = dt.fullname;
                      }
                    })
                  }
                  else{
                    boxName = data.boxName;
                  }
                  return {
                    id : data.id,
                    boxName,
                  }
                })
                socket.emit('GET_MESSAGED_LIST_RESPONSE',list);
            }
          })
          .catch(err => console.log(err));
      })
}