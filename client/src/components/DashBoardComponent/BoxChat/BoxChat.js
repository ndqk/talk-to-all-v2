import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../../../store/actions/ModalAction';
import '../../Css/BoxChatComponent.css'

import LeftSide from './LeftSide/LeftSide';
import MidSide from './MidSide/MidSide';
import RightSide from './RightSide/RightSide';

class BoxChat extends Component{
    componentDidMount(){
        this.props.closeModal();
    }
    render(){
        return(
            <div className = 'BoxChatComponent'>
                <LeftSide/>
                <MidSide/>
                <RightSide/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
        closeModal : () => dispatch(closeModal())
    }
}

export default connect(null,mapDispatchToProps)(BoxChat);