const types = require('../constants/UserConstant');
const Room = require('../mongo_db/model/Room');

let UpdateRoomDataResponse = require('./UpdateRoomDataResponse');

module.exports = (socket,io) => {
    socket.on('SEND_MESSAGE',(roomID,data) => {
        Room.findById(roomID)
            .then(room => {
                //let {id,member,nameRoom,messages} = room;
                let newMessage = {
                    from : data.from,
                    message : data.message,
                }
                room.messages.push(newMessage)
                room.save()
                    .then(() => UpdateRoomDataResponse(io,room))
            })
    })
}