import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../../../Css/HeadBoxChat.css'

import Avata from '../../../../Templates/Avata';
import TextLabel from '../../../../Templates/TextLabel';

class HeadBoxChat extends Component{
    render(){
        return(
            <div className='HeadBoxChat'>
                <Avata height='50px' width='50px' shape='Circle' src='group_avata.svg' margin='0 10px 0 10px'/>
                <TextLabel>{this.props.room.nameRoom}</TextLabel>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        room : state.RoomReducer
    }
}

export default connect(mapStateToProps)(HeadBoxChat);