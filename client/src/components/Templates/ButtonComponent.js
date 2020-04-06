import React, {Component} from 'react';
import './ButtonComponent.css';

export default class ButtonComponent extends Component{
    render(){
        const bg = this.props.backgroundImage ? this.props.backgroundImage : '';
        return(
            <div className = 'ButtonItem'>
                <div className = 'ButtonItem_'>
                    <button style = {{...this.props.styleButton,...{backgroundImage: `url(${bg})`}}}  onClick = {this.props.onClick}>
                        {this.props.children}
                    </button>
                </div>
            </div>
        );
    }
}