const Account = require('../mongo_db/model/Account');

module.exports = (socket,io) => {
    socket.on('SEND_ADD_FRIEND_REQUEST',(from,to) => {
        Account.findById(to)
            .then(user => {
                if(user){
                    user.friendRequests.push(from);
                    user.save()
                        .then(user => {
                            let {id,fullname,email,friends,avata,friendRequests,requestToFriends,notifications} = user;
                            io.to(to).emit('GET_USER_RESPONSE',{id,fullname,email,friends,avata,friendRequests,requestToFriends,notifications})
                        })
                }
            })
        Account.findById(from)
            .then(user => {
                if(user){
                    user.requestToFriends.push(to);
                    user.save()
                        .then(user => {
                            if(user){
                                let {id,fullname,email,friends,avata,friendRequests,requestToFriends,notifications} = user;
                                socket.emit('GET_USER_RESPONSE',{id,fullname,email,friends,avata,friendRequests,requestToFriends,notifications})
                              }
                        })
                }
            })
    })
}