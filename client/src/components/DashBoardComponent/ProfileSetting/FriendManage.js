import React, {Component} from 'react';
import './FriendManage.css';

export default class FriendManage extends Component{
    render(){
        return(
            <div className = 'FriendManage'>
                <div className = 'NavTab'>
                    <div><span>Tất cả bạn bè</span></div>
                    <div><span>Tìm bạn bè</span></div>
                    <div><span>Lời mời kết bạn</span></div>
                </div>
                <div className = 'contentTab'>

                </div>
            </div>
        );
    }
}