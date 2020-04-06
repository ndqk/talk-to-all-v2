const express = require('express')
const http = require('http')
const bodyParser = require('body-parser');
const socketIO = require('socket.io')
const mongoose = require('mongoose');

const port = 8080
const app = express()
const server = http.createServer(app)
const io = socketIO(server)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

mongoose.connect('mongodb://localhost:27017/talktoall',{useNewUrlParser: true, useUnifiedTopology: true});

const LoginController = require('./controllers/LoginController');
const LogoutController = require('./controllers/LogoutController');
const SignUpController = require('./controllers/SignUpController');
const GetUserController = require('./controllers/GetUserController');
const SendMessageController = require('./controllers/SendMessageController');
const GetMessagedListController = require('./controllers/GetMessagedListController');
const GetOnlineListController = require('./controllers/GetOnlineListController')
const OpenBoxChatController = require('./controllers/OpenBoxChatController');
const OpenNewBoxChatController = require('./controllers/OpenNewBoxChatController');
const CreateBoxChatController = require('./controllers/CreateBoxChatController');
const CreateRoomController = require('./controllers/CreateRoomController');
const LeaveRoomController = require('./controllers/LeaveRoomController');
const JoinRoomController = require('./controllers/JoinRoomController');
const ChangePasswordController = require('./controllers/ChangePasswordController')
const ChangeNameController = require('./controllers/ChangeNameController');
const ChangeAvataController = require('./controllers/ChangeAvataController');
const SearchFriendController = require('./controllers/SearchFriendController');
const GetListFriendController  = require('./controllers/GetListFriendController');
const GetFriendRequestsController = require('./controllers/GetFriendRequestsController');
const SendAddFriendRequestController = require('./controllers/SendAddFriendRequestController');
const AcceptFriendRequestController = require('./controllers/AcceptFriendRequestController');
const DeclineFriendRequestController = require('./controllers/DeclineFriendRequestController');

io.on('connection', socket => {
  //LOGIN_LOGOUT_SIGNUP
  LoginController(socket);
  LogoutController(socket,io);
  SignUpController(socket);
  //GET USER
  GetUserController(socket);
  ChangePasswordController(socket);
  ChangeNameController(socket);
  ChangeAvataController(socket);
  //
  SendMessageController(socket,io);
  GetMessagedListController(socket);
  GetOnlineListController(socket,io);
  OpenBoxChatController(socket);
  OpenNewBoxChatController(socket);
  CreateBoxChatController(socket,io);
  //ROOM ACTION
  CreateRoomController(socket,io);
  LeaveRoomController(socket,io);
  JoinRoomController(socket,io);
  //FRIEND
  SearchFriendController(socket);
  GetListFriendController(socket);
  GetFriendRequestsController(socket);
  SendAddFriendRequestController(socket,io);
  AcceptFriendRequestController(socket,io);
  DeclineFriendRequestController(socket,io);
})

server.listen(port, () => console.log(`Listening on port ${port}`))