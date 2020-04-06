import React, {Component} from 'react';
import './TextLabel.css';

export default class TextLabel extends Component{
    render(){
        const TextStyle = {
            fontSize: this.props.fontSize,
            color : this.props.color,
            fontWeight : this.props.fontWeight,
            cursor : this.props.cursor

        }
        return(
            <div className = 'TextLabel'>
                <span style ={TextStyle}  onClick={this.props.onClick}>
                    {this.props.children}
                </span>
            </div>
        );
    }
}