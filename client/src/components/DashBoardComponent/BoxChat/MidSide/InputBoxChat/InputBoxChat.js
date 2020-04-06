import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../../../../../store/actions/RoomAction';
import '../../../../Css/InputBoxChat.css';

import ButtonComponent from '../../../../Templates/ButtonComponent';
import InputComponent from '../../../../Templates/InputComponent';

class InputBoxChat extends Component{
    constructor(props){
        super(props);
        this.state = {
            message : '',
            btnSubmit : 'like.svg'
        }
        this.sendMessage = this.sendMessage.bind(this);
        this.inputOnChangeHandle = this.inputOnChangeHandle.bind(this);
        this.inputOnFocusHandle = this.inputOnFocusHandle.bind(this);
        this.inputOnBlurHandle = this.inputOnBlurHandle.bind(this);
        this.keyPressHandle = this.keyPressHandle.bind(this);
    }
    inputOnChangeHandle(event){
        this.setState({
            message : event.target.value
        })
    }
    inputOnFocusHandle(){
        this.setState({
            btnSubmit : 'triangular.svg'
        })
    }
    inputOnBlurHandle(){
        this.setState({
            btnSubmit : 'like.svg'
        })
    }
    sendMessage(){
        let message = {
            from : this.props.userID,
            // avata : this.props.avata,
            message : this.state.message
        }
        this.props.sendMessage(this.props.roomID,message);
        this.setState({
            message : ''
        })
    }
    keyPressHandle(event){
        if(event.key === 'Enter')
            this.sendMessage();
    }
    render(){
        return(
            <div className='InputBoxChat'>
                <div className='MoreInput'>
                    <ButtonComponent styleButton={styleButton} backgroundImage = 'photo.svg'/>
                    <ButtonComponent styleButton={styleButton} backgroundImage = 'sticker.svg'/>
                    <ButtonComponent styleButton={styleButton} backgroundImage = 'gif.svg'/>
                </div>
                <InputComponent value={this.state.message} placeholder='Nhập tin nhắn ...'
                    onChange={this.inputOnChangeHandle} 
                    onKeyPress={this.keyPressHandle}
                    onFocus={this.inputOnFocusHandle}
                    onBlur={this.inputOnBlurHandle}/>
                <ButtonComponent onClick={this.sendMessage} styleButton={styleButton} backgroundImage = {this.state.btnSubmit}/>
            </div>
        );
    }
}

const styleButton = {
    height : '40px',
    width : '40px',
    margin : '0 5px 0 5px',
    backgroundSize : 'cover'
}

const mapStateToProps = state => {
    return{
        userID : state.UserReducer.id,
        roomID : state.RoomReducer._id,
        avata : state.UserReducer.avata
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendMessage : (roomID,userID) => dispatch(sendMessage(roomID,userID)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InputBoxChat);