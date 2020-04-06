const Account = require('../mongo_db/model/Account');

module.exports = (socket) => {
    socket.on('CHANGE_PASSWORD_REQUEST',(userID,currPass,newPass) => {
       Account.findById(userID)
        .then(user => {
            if(user){
                if(user.password === currPass){
                    user.password = newPass;
                    user.save()
                        .then(() => socket.emit('RESPONSE_SUCCESS',{changePassSuccess : 'Đổi mật khẩu thành công.'}))
                }
                else{
                    socket.emit('GET_ERROR_RESPONSE',{changePassError : 'Mật khẩu hiện tại không chính xác.'})
                }
            }
        })
    })
}