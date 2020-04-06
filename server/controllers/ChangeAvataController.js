const Account = require('../mongo_db/model/Account');

module.exports = (socket) => {
    socket.on('CHANGE_AVATA_REQUEST',(userID,newAvata) => {
        Account.findById(userID)
            .then(user => {
                if(user){
                    user.avata = newAvata.base64;
                    user.save()
                        .then(user => {
                            let {id,fullname,email,messagedList,avata} = user;
                            socket.emit('GET_USER_RESPONSE',{id,fullname,email,messagedList,avata});
                            socket.emit('RESPONSE_SUCCESS',{changeAvataSuccess : 'Đổi ảnh đại diện thành công.'})
                        });
                }
            })
    })
}