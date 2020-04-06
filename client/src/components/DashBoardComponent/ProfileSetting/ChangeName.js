import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeFullnameRequest} from '../../../store/actions/UserAction';

import InputComponent from '../../Templates/InputComponent';
import ButtonComponent from '../../Templates/ButtonComponent';

class ChangeName extends Component {
    constructor(props){
        super(props);
        this.state = {
            newFullName : ''
        }
        this.inputOnChangeHandle = this.inputOnChangeHandle.bind(this);
        this.changeFullnameRequest = this.changeFullnameRequest.bind(this);
    }
    inputOnChangeHandle(event){
        this.setState({
            newFullName : event.target.value
        })
    }
    changeFullnameRequest(){
        this.props.changeFullnameRequest(this.props.userID,this.state.newFullName);
        this.setState({
            newFullName : ''
        })
    }
    render(){
        return(
            <div className = 'ChangeName'>
                {(this.props.changeNameSuccess !== null) ? 
                    <div className = 'success-alert'>
                        <p>{this.props.changeNameSuccess}</p>
                    </div> : ''}
                <InputComponent value={this.state.newFullName} onChange={this.inputOnChangeHandle} margin='10px 0 10px 0' placeholder='Nhập tên mới'/>
                <ButtonComponent onClick={this.changeFullnameRequest} styleButton ={styleButton}>Xác nhận</ButtonComponent>
            </div>
        );
    }
}

const styleButton = {
    border : 'solid 1px lightgrey',
    borderRadius : '20px',
    padding : '10px',
    margin : '20px'
}

const mapStateToProps = state => {
    return {
        userID : state.UserReducer.id,
        changeNameSuccess : state.AlertSuccessReducer.changeNameSuccess
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeFullnameRequest : (userID, newFullName) => dispatch(changeFullnameRequest(userID,newFullName))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChangeName);