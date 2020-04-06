const Account = require('../mongo_db/model/Account');

module.exports = (socket,io) => {
    socket.on('DECLINE_FRIEND_REQUEST_REQUEST',(from,to) => {
        Account.findById(from)
            .then(user => {
                if(user){
                    user.friendRequests.splice(user.friendRequests.indexOf(to),1);
                    user.save()
                        .then(user => {
                            let {id,fullname,email,friends,avata,friendRequests,requestToFriends,notifications} = user;
                            socket.emit('GET_USER_RESPONSE',{id,fullname,email,friends,avata,friendRequests,requestToFriends,notifications})
                        })
                }
            })
        Account.findById(to)
            .then(user => {
                if(user){
                    user.requestToFriends.splice(user.requestToFriends.indexOf(from),1);
                    user.save()
                        .then(user => {
                            let {id,fullname,email,friends,avata,friendRequests,requestToFriends,notifications} = user;
                            io.to(to).emit('GET_USER_RESPONSE',{id,fullname,email,friends,avata,friendRequests,requestToFriends,notifications})
                        })
                }
            })
    })
}