import React, {Component} from 'react';
import './PopUp.css';

export default class PopUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            stylePopUp : {
                display : 'none'
            }
        }
        this.togglePopUp = this.togglePopUp.bind(this);
    }
    togglePopUp(){
        if(this.state.stylePopUp.display==='none')
            this.setState({
                stylePopUp:{
                    display : 'block'
                }
            })
        else{
            this.setState({
                stylePopUp:{
                    display : 'none'
                }
            })
        }
    }
    render(){
        return(
            <div className='PopUp'>
                <div className='PopUpContent' style={this.state.stylePopUp}>

                </div>
                <div className='togglePopUp'>
                    <div className='iconPopUp' onClick={this.togglePopUp}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}