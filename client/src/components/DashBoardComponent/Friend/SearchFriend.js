import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchFriend,sendAddFriendRequest} from '../../../store/actions/FriendAction';
import './SearchFriend.css'

import InputComponent from '../../Templates/InputComponent';
import Thread from './Thread';

class SearchFriend extends Component{
    constructor(props){
        super(props);
        this.state = {
            keyword : ''
        }
        this.inputOnChangeHandle = this.inputOnChangeHandle.bind(this);
    }
    inputOnChangeHandle(e){
        this.setState({
            keyword : e.target.value
        })
        if(this.state.keyword.trim().length !== 0)
            this.props.searchFriend(this.state.keyword.trim());
    }
    render(){
        return(
            <div className = 'SearchFriend'>
                <div className = 'Search'>
                    <InputComponent placeholder='Search' margin='10px 0 0 0'
                    value = {this.state.keyword}
                    onChange = {this.inputOnChangeHandle}
                    />
                </div>
                <div className = 'SearchResult'>
                    {this.props.searchFriendList.map(data => {
                        if(data.id != this.props.user.id){
                            let type = 'normal';
                            let added = false;
                            if(this.props.user.friends || this.props.user.friends.indexOf(data.id) === -1)
                                type = 'Addfriend';
                            if(this.props.user.requestToFriends || this.props.user.requestToFriends.indexOf(data.id) !== -1)
                                added = true;
                            return <Thread added={added} type={type} nameThread={data.fullname} 
                            srcThread={data.avata} key={data.id}
                            addFriend = {()=>this.props.sendAddFriendRequest(this.props.user.id,data.id)}/>
                        }
                    }
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchFriendList : state.FriendReducer.searchFriend,
        user : state.UserReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchFriend : (keyword) => dispatch(searchFriend(keyword)),
        sendAddFriendRequest : (from,to) => dispatch(sendAddFriendRequest(from,to))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchFriend);