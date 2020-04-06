import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../Css/Notification.css';

class Notification extends Component{
    render(){
        return(
            <div className = 'Notification'>
                {this.props.notifications.map((data,index) => {
                    let content = '';
                    if(data.type === 1){
                        content = ` đã chấp nhận lời mời kết bạn.`;
                    }
                    return <div className = 'NotificationItem new'>
                                <p>{data.from}{content}</p>
                            </div>
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notifications : state.UserReducer.notifications
    }
}

export default connect(mapStateToProps)(Notification);