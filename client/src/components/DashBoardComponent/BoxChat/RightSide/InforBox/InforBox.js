import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../../../Css/InforBox.css';

import Avata from '../../../../Templates/Avata';
import TextLabel from '../../../../Templates/TextLabel';

class InforBox extends Component{
    render(){
        return(
            <div className = 'InforBox'>
                <Avata height='100px' width='100px' shape='Circle' src='group_avata.svg' margin='10px 0 10px 0'/>
                <TextLabel fontSize='30px'>{this.props.room.nameRoom}</TextLabel>
                <TextLabel fontSize='15px' fontWeight='lighter'>ID : {this.props.room._id}</TextLabel>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        room : state.RoomReducer
    }
}

export default connect(mapStateToProps)(InforBox);