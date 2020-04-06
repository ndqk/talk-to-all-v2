const Room = require('../mongo_db/model/Room');
const Account = require('../mongo_db/model/Account');

let updateRoomDataResponse = require('./UpdateRoomDataResponse');

module.exports = (socket,io) => {
    socket.on('CREATE_ROOM_REQUEST',(nameRoom,userdID) => {
        let newRoom = new Room({
            nameRoom : nameRoom,
            member : [userdID],
            messages : []
        });
        newRoom.save()
            .then(room => {
                socket.join(room.id);
                updateRoomDataResponse(io,room)
            })
    })
}