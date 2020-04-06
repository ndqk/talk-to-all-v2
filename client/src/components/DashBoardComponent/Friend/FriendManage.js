import React, {Component} from 'react';
import './FriendManage.css';

import ListFriend from './ListFriend';
import SearchFriend from './SearchFriend';
import FriendRequest from './FriendRequest';

export default class FriendManage extends Component{
    constructor(props){
        super(props);
        this.state = {
            contentTab : <ListFriend/>,
            active : 'First'
        }
    }
    openTab(event,data){
        let tmp = event.target.id;
        this.setState({
            contentTab : data,
            active : tmp
        })
    }
    render(){
        return(
            <div className = 'FriendManage'>
                <div className = 'NavTab'>
                    <div id = 'First' onClick={(e)=>this.openTab(e,<ListFriend/>)}>
                        <span id = 'First' className={(this.state.active === 'First') ? 'active' : ''}>Tất cả bạn bè</span>
                    </div>
                    <div id = 'Second' onClick={(e)=>this.openTab(e,<SearchFriend/>)}>
                        <span id = 'Second' className={(this.state.active === 'Second') ? 'active' : ''}>Tìm bạn bè</span>
                    </div>
                    <div id = 'Third' onClick={(e)=>this.openTab(e,<FriendRequest/>)}>
                        <span id = 'Third' className={(this.state.active === 'Third') ? 'active' : ''}>Lời mời kết bạn</span>
                    </div>
                </div>
                <div className = 'contentTab'>
                    {this.state.contentTab}
                </div>
            </div>
        );
    }
}