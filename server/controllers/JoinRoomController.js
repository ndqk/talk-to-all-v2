const Room = require('../mongo_db/model/Room');
const GetMemberFromID = require('./GetMemberFromID');

let UpdateRoomDataResponse = require('./UpdateRoomDataResponse');

module.exports = (socket,io) => {
    socket.on('JOIN_ROOM_REQUEST',(userID,roomID) => {
        Room.findById(roomID)
            .then(room => {
                if(room){
                    room.member.push(userID);
                    room.save()
                        .then(room => {
                            socket.join(roomID);
                            UpdateRoomDataResponse(io,room);
                        })
                }
                else{
                    socket.emit('GET_ERROR_RESPONSE',{joinError : 'Phòng không tồn tại.'})
                }
            })
            .catch(()=> socket.emit('GET_ERROR_RESPONSE',{joinError : 'Phòng không tồn tại.'}));
    })
}