import React , {Component} from 'react';
import {connect} from 'react-redux';
import {joinRoomRequest} from '../../../store/actions/RoomAction';
import {closeModal} from '../../../store/actions/ModalAction';

import InputComponent from '../../Templates/InputComponent';
import ButtonComponent from '../../Templates/ButtonComponent';

class EnterRoom extends Component{
    constructor(props){
        super(props);
        this.state = {
            roomID : ''
        }
        this.inputOnChangeHandle = this.inputOnChangeHandle.bind(this);
        this.joinRoomRequest = this.joinRoomRequest.bind(this);
    }
    inputOnChangeHandle(event){
        this.setState({
            roomID : event.target.value
        })
    }
    joinRoomRequest(){
        this.props.joinRoomRequest(this.props.userID,this.state.roomID);
        this.setState({
             roomID : ''
        });
    }
    render() {
        return(
            <div className = 'EnterRoom'>
                {(this.props.joinError !== null) ? 
                <div className = 'error'>
                    <p>{this.props.joinError}</p>
                </div> : ''}
                <InputComponent value={this.state.roomID} onChange={this.inputOnChangeHandle} margin = '20px 0 20px 0' placeholder = 'Enter room id'/>
                <ButtonComponent onClick = {this.joinRoomRequest} styleButton={styleButton}>Enter</ButtonComponent>
            </div>
        );
    }
}

const styleButton = {
    border : 'solid 1px lightgrey',
    borderRadius : '20px',
    padding : '10px',
    margin : '10px 0 20px 0'
}

const mapStateToProp = state => {
    return {
        userID : state.UserReducer.id,
        joinError : state.ErrorReducer.joinError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        joinRoomRequest : (userID,roomID) => dispatch(joinRoomRequest(userID,roomID)),
        closeModal : () => dispatch(closeModal())
    }
}

export default connect(mapStateToProp,mapDispatchToProps)(EnterRoom);