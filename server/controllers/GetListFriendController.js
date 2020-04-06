let getFormID = require('./GetMemberFromID');

module.exports = (socket) => {
    socket.on('GET_LIST_FRIEND_REQUEST',listID => {
        getFormID(listID)
            .then(listUser => {
                socket.emit('GET_LIST_FRIEND_RESPONSE',listUser);
            })
    })
}