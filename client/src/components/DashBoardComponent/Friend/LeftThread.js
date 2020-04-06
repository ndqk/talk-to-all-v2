import React, {Component} from 'react';
import '../../Css/LeftThread.css';
import Avata from '../../Templates/Avata';
import TextLable from '../../Templates/TextLabel';

class LeftThread extends Component{
    render(){
        return(
            <div className = 'LeftThread'>
                <div className = 'LeftThread_'>
                    <div className = 'Thread'>
                        <Avata height='40px' width='40px' shape='Circle' src={this.props.srcThread} border='solid 1px lightgrey'/>
                        <TextLable>{this.props.nameThread}</TextLable>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftThread;