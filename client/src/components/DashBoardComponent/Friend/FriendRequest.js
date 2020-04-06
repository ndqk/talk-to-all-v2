import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getListFriendRequest,acceptFriendRequest,declineFriendRequest} from '../../../store/actions/FriendAction';
import './FriendRequest.css';

import Thread from './Thread';

class FriendRequest extends Component{
    componentDidMount(){
        this.props.getListFriendRequest(this.props.friendRequestsID);
    }
    render(){
        console.log(this.props.friendRequestsID)
        return(
            <div className = 'FriendRequest'>
                {this.props.friendRequests.map(data => {
                    return <Thread 
                        acceptRequest={()=>this.props.acceptFriendRequest(this.props.userID,data.id)} 
                        declineRequest={()=>this.props.declineFriendRequest(this.props.userID,data.id)}
                        nameThread={data.fullname} srcThread={data.avata} key={data.id}/>
                })}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        friendRequestsID : state.UserReducer.friendRequests,
        friendRequests : state.FriendReducer.friendRequests,
        userID : state.UserReducer.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListFriendRequest : (listID) => dispatch(getListFriendRequest(listID)),
        acceptFriendRequest : (from,to) => dispatch(acceptFriendRequest(from,to)),
        declineFriendRequest : (from,to) => dispatch(declineFriendRequest(from,to))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FriendRequest);