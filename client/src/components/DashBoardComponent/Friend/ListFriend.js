import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getListFriend} from '../../../store/actions/FriendAction';
import './ListFriend.css';
import Thread from './Thread';

class ListFriend extends Component{
    componentDidMount(){
        this.props.getListFriend(this.props.listfriendID);
    }
    render(){
        return(
            <div className = 'ListFriend'>
                {this.props.listFriend.map(data => 
                    <Thread type='normal' nameThread={data.fullname} srcThread={data.avata} key={data.id}/>)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        listfriendID : state.UserReducer.friends,
        listFriend : state.FriendReducer.listFriend
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListFriend : (listID) => dispatch(getListFriend(listID))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListFriend);