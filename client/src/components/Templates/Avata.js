import React, {Component} from 'react';
import './Avata.css';

export default class Avata extends Component{
    render(){
        const style = {
            height : this.props.height || 0,
            width : this.props.width || 0,
            cursor : this.props.cursor,
            margin : this.props.margin,
            border : this.props.border
        }
        return(
            <div className = 'Avata'>
                <div className = 'Avata_'>
                    <div style = {style} className = {this.props.shape}>
                        <img src = {this.props.src} alt = '' onClick={this.props.onClick}/>
                    </div>
                </div>  
            </div>
        );
    }
}