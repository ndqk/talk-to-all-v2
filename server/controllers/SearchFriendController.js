const Account = require('../mongo_db/model/Account');

module.exports = (socket) => {
    socket.on('SSEARCH_FRIEND_REQUEST',keyword => {
        Account.find({})
            .then(allUser => {
                keyword = keyword.toLowerCase();
                let res = allUser.filter((data) => {
                    return (data.fullname.toLowerCase().indexOf(keyword) !== -1);
                })
                let res2 = res.map(data => {
                    return {
                        id : data.id,
                        fullname : data.fullname,
                        avata : data.avata
                    }
                })
                socket.emit('SSEARCH_FRIEND_RESPONSE',res2);
            })
    })
}