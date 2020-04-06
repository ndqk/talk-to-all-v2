import React , {Component} from 'react';
import '../../Css/CreateRoom.css';

import {connect} from 'react-redux';
import {createRoomRequest} from '../../../store/actions/RoomAction';
import {closeModal} from '../../../store/actions/ModalAction';

import InputComponent from '../../Templates/InputComponent';
import ButtonComponent from '../../Templates/ButtonComponent';

class CreateRoom extends Component{
    constructor(props){
        super(props);
        this.state = {
            nameRoom : ''
        }
        this.inputOnchangeHandle = this.inputOnchangeHandle.bind(this);
        this.createRoomRequest = this.createRoomRequest.bind(this);
    }
    inputOnchangeHandle(event){
        this.setState({
            nameRoom : event.target.value
        })
    }
    createRoomRequest(){
        this.props.createRoomRequest(this.state.nameRoom,this.props.userID);
        this.setState({
            nameRoom : ''
        })
        this.props.closeModal();
    }
    render() {
        return(
            <div className = 'CreateRoom'>
                <InputComponent value={this.state.nameRoom} onChange={this.inputOnchangeHandle} margin = '20px 0 20px 0' placeholder = 'Enter name of room'/>
                <ButtonComponent onClick={this.createRoomRequest} styleButton={styleButton}>Create</ButtonComponent>
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

const mapStateToProps = state => {
    return{
        userID : state.UserReducer.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createRoomRequest : (nameRoom,userID) => dispatch(createRoomRequest(nameRoom,userID)),
        closeModal : () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateRoom);