import React, {Component} from 'react';
import './Thread.css';
import Avata from '../../Templates/Avata';
import TextLable from '../../Templates/TextLabel';

class LeftThread extends Component{
    render(){
        return(
            <div className = 'LeftThread'>
                <div className = 'LeftThread_'>
                    <div className = 'Thread'>
                        <div className = 'ThreadInfor'>
                            <Avata height='40px' width='40px' shape='Circle' src={this.props.srcThread} border='solid 1px lightgrey'/>
                            <TextLable>{this.props.nameThread}</TextLable>
                        </div>
                        {(this.props.type === 'normal') ? '' : 
                            <div className = 'RequestButton'>
                                {(this.props.type === 'Addfriend') ? 
                                    <div className = 'RequestButton_'>
                                        {(this.props.added === true) ? <button>Đã gửi lời mời kết bạn</button> :
                                        <button onClick={this.props.addFriend}>Kết bạn</button>}
                                    </div>
                                    : 
                                    <div className = 'RequestButton_'>
                                        <button onClick={this.props.acceptRequest}>Chấp nhận</button>
                                        <button onClick={this.props.declineRequest}>Từ chối</button>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftThread;