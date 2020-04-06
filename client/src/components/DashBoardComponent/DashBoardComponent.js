import React, {Component} from 'react';
import {connect} from 'react-redux';
import {openModal} from '../../store/actions/ModalAction';
import {logoutRequest} from '../../store/actions/LoginAction';
import {updateRoomData,leaveRoomResponse} from '../../store/actions/RoomAction';
import {getErrorResponse} from '../../store/actions/ErrorAction';
import {getAlertResponse} from '../../store/actions/AlertSuccessAction';

import '../Css/DashBoardComponent.css';
import TextLabel from '../Templates/TextLabel';
import ButtonComponent from '../Templates/ButtonComponent';
import MoreModal from '../Templates/MoreModal';
import Avata from '../Templates/Avata';

import CreateRoom from '../DashBoardComponent/CreateRoom/CreateRoom';
import EnterRoom from '../DashBoardComponent/EnterRoom/EnterRoom';
import Notification from '../DashBoardComponent/Notification/Notification';
import Friend from '../DashBoardComponent/Friend/Friend';
import ProfileSetting from '../DashBoardComponent/ProfileSetting/ProfileSetting';
import BoxChat from '../DashBoardComponent/BoxChat/BoxChat'


class DashBoardComponent extends Component{
    componentDidMount(){
        this.props.updateRoomData();
        this.props.leaveRoomResponse();
        this.props.getErrorResponse();
        this.props.getAlertResponse();
    }
    render(){
        console.log(this.props.user)
        return(
            <div className = 'DashBoardComponent'>
                {this.props.ModalIsOpen ? <MoreModal/> : ''}
                {(this.props.room === null) ?
                <div className = 'DashBoardContent' style={{opacity : this.props.ModalIsOpen ? 0.5 : 1}}>
                    <div className = 'Logo'>
                        <TextLabel fontSize= '50px'>TALK TO ALL</TextLabel>
                    </div>
                    <div className = 'Username'>
                        <Avata height='70px' width='70px' shape='Circle' src={this.props.user.avata}/>
                        <TextLabel fontSize = '30px' fontWeight='lighter'>{this.props.user.fullname}</TextLabel>
                    </div>
                    <div className = 'DashBoardOption'>
                        <div className = 'OptionList'>
                            <div className = 'OptionItem'>
                                <ButtonComponent onClick={()=>this.props.openModal('Create room',<CreateRoom/>)} styleButton = {styleButton} backgroundImage = 'more.svg'/>
                                <TextLabel>Create room</TextLabel>
                            </div>
                            <div className = 'OptionItem'>
                                <ButtonComponent onClick={()=>this.props.openModal('Enter room',<EnterRoom/>)} styleButton = {styleButton} backgroundImage = 'joinroom.svg'/>
                                <TextLabel>Enter room</TextLabel>
                            </div>
                            <div className = 'OptionItem'>
                                <ButtonComponent onClick={()=>this.props.openModal('Notification',<Notification/>)} styleButton = {styleButton} backgroundImage = 'notification.svg'/>
                                <TextLabel>Notification</TextLabel>
                            </div>
                            <div className = 'OptionItem'>
                                <ButtonComponent onClick={()=>this.props.openModal('Friend',<Friend/>)} styleButton = {styleButton} backgroundImage = 'friend.svg'/>
                                <TextLabel>Friend</TextLabel>
                            </div>
                            <div className = 'OptionItem'>
                                <ButtonComponent onClick={()=>this.props.openModal('Setting',<ProfileSetting/>)} styleButton = {styleButton} backgroundImage = 'settings.svg'/>
                                <TextLabel>Setting</TextLabel>
                            </div>
                            <div className = 'OptionItem'>
                                <ButtonComponent onClick = {()=>this.props.logoutRequest()} styleButton = {styleButton} backgroundImage = 'logout.svg'/>
                                <TextLabel>Log out</TextLabel>
                            </div>
                        </div>
                    </div>
                </div>  : <BoxChat/>}
            </div> 
        );
    }
}

const styleButton = {
    height : '100px',
    width : '100px',
    backgroundSize : 'cover'
}

const mapStateToProps = state => {
    return {
        ModalIsOpen : state.ModalReducer.isOpen,
        user : state.UserReducer,
        room : state.RoomReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal : (NameModal,ContentModal) => dispatch(openModal(NameModal,ContentModal)),
        logoutRequest : () => dispatch(logoutRequest()),
        updateRoomData : () => dispatch(updateRoomData()),
        leaveRoomResponse : () => dispatch(leaveRoomResponse()),
        getErrorResponse : () => dispatch(getErrorResponse()),
        getAlertResponse : () => dispatch(getAlertResponse())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DashBoardComponent);