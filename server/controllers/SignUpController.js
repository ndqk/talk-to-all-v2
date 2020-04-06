const types = require('../constants/UserConstant');
const Account = require('../mongo_db/model/Account');

module.exports = (socket) => {
    socket.on(types.SIGN_UP_REQUEST,  data => {
        Account.findOne({username : data.username})
          .then(respone => {
            if(respone){
              socket.emit('SIGN_UP_RESPONSE',{error : true});
            }
            else{
              let newUser = new Account({
                username : data.username,
                fullname : data.fullname,
                password : data.password,
                email : data.email,
                avata : null
              })
              newUser.save()
                .then(respone => {
                    let {id} = respone;
                    socket.emit('SIGN_UP_RESPONSE',{error : null, userID : id});
                })
            }
          })
          .catch(err => console.log(err));
      })
}