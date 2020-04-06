import React, {Component} from 'react';
import './InputComponent.css';

export default class InputComponent extends Component{
    render(){
        const InputStyle = {
            margin : this.props.margin
        }
        return(
            <div className = 'InputComponent' style={InputStyle}>
                <div className = 'InputComponent_'>
                    <input name={this.props.name} value = {this.props.value}  type ={this.props.type} placeholder ={this.props.placeholder} 
                        onChange = {this.props.onChange} 
                        onFocus = {this.props.onFocus} 
                        onBlur = {this.props.onBlur}
                        onKeyPress = {this.props.onKeyPress}
                    />
                </div>
            </div>
        );
    }
}