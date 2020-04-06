const Account = require('../mongo_db/model/Account');

module.exports = (socket) => {
    socket.on('CHANGE_FULLNAME_REQUEST',(userID,newFullname) => {
        Account.findById(userID)
            .then(user => {
                if(user){
                    user.fullname = newFullname;
                    user.save()
                        .then(user => {
                            let {id,fullname,email,messagedList} = user;
                            socket.emit('GET_USER_RESPONSE',{id,fullname,email,messagedList})
                            socket.emit('RESPONSE_SUCCESS',{changeNameSuccess : 'Đổi tên thành công.'})
                        })
                }
            })
    })
}