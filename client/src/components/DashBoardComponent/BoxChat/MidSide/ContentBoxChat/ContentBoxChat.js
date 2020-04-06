import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../../../Css/ContentBoxChat.css';

import Message from '../../../../Templates/Message';

class ContentBoxChat extends Component{
    constructor(props){
        super(props);
        this.messagesEndRef = React.createRef()  
    }
    componentDidMount(){
        this.scrollToBottom()
    }
    componentDidUpdate () {
        this.scrollToBottom()
    }
    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    render(){
        return(
            <div className = 'ContentBoxChat'>
                {this.props.messages.map((message,index) => {
                    let lor = 'Left';
                    if(this.props.userID === message.from)
                        lor = 'Right';
                    return <Message key={index} MarginLR={lor} avataMessage={message.avata} nameMessage={message.fullname}>{message.message}</Message>
                })}
                <div ref={this.messagesEndRef} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages : state.RoomReducer.messages,
        userID : state.UserReducer.id,
    }
}

export default connect(mapStateToProps)(ContentBoxChat);