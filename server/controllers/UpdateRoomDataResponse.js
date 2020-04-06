let getMemberFromID = require('./GetMemberFromID');
let getMessagesFromRoom = require('./GetMessagesFromRoom');

module.exports = (io,room) => {
    getMemberFromID(room.member)
        .then(member => {
            room.member = member;
            getMessagesFromRoom(room.messages)
                .then(messages => {
                    room.messages = messages;
                    io.to(room.id).emit('UPDATE_ROOM_DATA',room);
                })
        })
}