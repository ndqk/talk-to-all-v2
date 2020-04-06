const types = require('../constants/UserConstant');
const BoxChat = require('../mongo_db/model/BoxChat');
const Account = require('../mongo_db/model/Account');

module.exports = (socket,io) => {
    socket.on('CREATE_BOX_CHAT',request => {
        console.log(request);
        let newBox = new BoxChat({
            boxType : 'Personal',
            boxName : '',
            member : request.data,
            messages : [{
                from : request.data[0].userID,
                message : request.message
            }]
        })
        newBox.save()
            .then(box => {
                Account.findById(request.data[0].userID)
                    .then(account => {
                        account.messagedList.unshift(box.id);
                        account.save()
                            .then(() => {
                                let {id,fullname,email,messagedList} = account;
                                io.to(id).emit('GET_USER_RESPONE',{id,fullname,email,messagedList})
                            })
                    })
                Account.findById(request.data[1].userID)
                    .then(account => {
                        account.messagedList.unshift(box.id);
                        account.save()
                            .then(() => {
                                let {id,fullname,email,messagedList} = account;
                                io.to(id).emit('GET_USER_RESPONE',{id,fullname,email,messagedList})
                            })
                    })
                
            })
    })
}