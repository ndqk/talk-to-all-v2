const Room = require('../mongo_db/model/Room');

let UpdateRoomDataResponse = require('./UpdateRoomDataResponse');

module.exports = (socket,io) => {
    socket.on('LEAVE_ROOM_REQUEST',(userID,roomID) => {
        Room.findById(roomID)
            .then(room => {
                if(room){
                    if(room.member.length > 1){
                        room.member.splice(room.member.indexOf(userID),1);
                        room.save()
                            .then(room => {
                                socket.emit('LEAVE_ROOM_RESPONSE');
                                socket.leave(roomID);
                                UpdateRoomDataResponse(io,room);
                            })
                    }
                    else{
                        Room.deleteOne({_id : roomID})
                            .then(() => socket.emit('LEAVE_ROOM_RESPONSE'));
                            
                    }
                }

            })
    })
}
