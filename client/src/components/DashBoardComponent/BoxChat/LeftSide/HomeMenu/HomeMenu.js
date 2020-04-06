import React, {Component} from 'react';
import {connect} from 'react-redux';
import {leaveRoomRequest} from '../../../../../store/actions/RoomAction';
import '../../../../Css/HomeMenu.css';

import Avata from '../../../../Templates/Avata';
import TextLabel from '../../../../Templates/TextLabel'

class HomeMenu extends Component{
    render(){
        return(
            <div className = 'HomeMenu'>
                <div className = 'HomeMenuLabel'>
                    <Avata onClick={()=>this.props.leaveRoomRequest(this.props.userID,this.props.roomID)} height = '50px' width = '50px' shape = 'Circle' src = 'leftarrow.svg' cursor='pointer' margin = '0 10px 0 10px'/>
                    <TextLabel>CHAT</TextLabel>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        roomID : state.RoomReducer._id,
        userID : state.UserReducer.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        leaveRoomRequest : (userID,roomID) => dispatch(leaveRoomRequest(userID,roomID))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeMenu)