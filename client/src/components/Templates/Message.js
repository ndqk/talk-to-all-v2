import React, {Component} from 'react';
import './Message.css';
import Avata from './Avata';

import TextLabel from './TextLabel';

export default class Message extends Component{
    render(){
        return(
            <div className ={'Message '+ this.props.MarginLR}>
                <div className = 'Message_'>
                    <div className='SmallAva'>
                        <Avata height = '25px' width = '25px' shape = 'Circle' src={this.props.avataMessage} />
                    </div>
                    <div className = 'MessageContent'>
                        <p>
                            {this.props.children}
                        </p>
                    </div>
                </div>
                <div className = 'nameMessage'>
                    <TextLabel fontWeight='lighter' fontSize='9px'>{this.props.nameMessage}</TextLabel>
                </div>
            </div>
        );
    }
}