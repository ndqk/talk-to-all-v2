import React,{Component} from 'react';
import '../../Css/Friend.css'
import Thread from './LeftThread';

import FriendManage from './FriendManage';

class Friend extends Component{
    render(){
        return(
            <div className = 'Friend'>
                <FriendManage/>
            </div>
        );
    }
}

export default Friend;