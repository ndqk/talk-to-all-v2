import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../../../Css/OnlineList.css';

import LeftThread from './LeftThread';

class OnlineList extends Component{
    render(){
        return(
            <div className='OnlineList'>
                {this.props.member.map(data => <LeftThread key={data.id} nameThread={data.fullname} srcThread={data.avata}/>)}   
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        member : state.RoomReducer.member
    }
}

export default connect(mapStateToProps)(OnlineList);