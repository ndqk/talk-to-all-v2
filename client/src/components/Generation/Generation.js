import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserRequest,getUserResponse} from '../../store/actions/UserAction';
import DashBoard from '../DashBoardComponent/DashBoardComponent';

class Generation extends Component{
    componentDidMount(){
        this.props.getUserRequest();
        this.props.getUserResponse();
    }
    render(){
        return(
            <div className = 'Generation'>
                {this.props.user ? <DashBoard/> : ''}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        user : state.UserReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserRequest : () => dispatch(getUserRequest()),
        getUserResponse : () => dispatch(getUserResponse())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Generation);