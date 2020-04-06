const types = require('../constants/UserConstant');
const Account = require('../mongo_db/model/Account');
const OnlineList = require('../mongo_db/model/OnlineList');

module.exports = (socket) => {
    socket.on(types.LOGIN_REQUEST,data => {
        Account.findOne({
          username : data.username,password : data.password
        })
        .then(respone => {
          if(respone){
            let {id,fullname} = respone;
            socket.join(id);
            let newOn = new OnlineList({fullname,userId : id});
            newOn.save();
            socket.emit('LOGIN_RESPONSE',{error:false,userID : id});
          }
          else
            socket.emit('LOGIN_RESPONSE',{error:true,userID : null});
        })
        .catch(error => {
          console.log(error);
        }) 
      })
}