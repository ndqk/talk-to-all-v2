import {combineReducers} from 'redux';
import ModalReducer from './ModalReducer';
import LoginReducer from './LoginReducer';
import SignUpReducer from './SignUpReducer';
import UserReducer from './UserReducer';
import RoomReducer from './RoomReducer';
import OnlineListReducer from './OnlineListReducer';
import ErrorReducer from './ErrorReducer';
import AlertSuccessReducer from './AlertSuccessReducer';
import FriendReducer from './FriendReducer';

const myReducer = combineReducers({
    ModalReducer,
    LoginReducer,
    SignUpReducer,
    UserReducer,
    RoomReducer,
    OnlineListReducer,
    ErrorReducer,
    AlertSuccessReducer,
    FriendReducer
});

export default myReducer;