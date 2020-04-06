import React, {Component} from 'react';
import md5 from 'md5';
import './ChangePassword.css';
import InputComponent from '../../Templates/InputComponent';
import { connect } from 'react-redux';
import {changePasswordRequest} from '../../../store/actions/UserAction';


class ChangePassword extends Component{
    constructor(props){
        super(props);
        this.state = {
            currPass : '',
            newPass : '',
            reNewPass : ''
        }
        this.inputOnChangeHanle = this.inputOnChangeHanle.bind(this);
        this.ChangePassword = this.ChangePassword.bind(this);
    }
    inputOnChangeHanle(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    ChangePassword(){
        if(this.state.newPass === this.state.reNewPass){
            this.props.changePasswordRequest(this.props.userID,md5(this.state.currPass),md5(this.state.newPass))
        }
    }
    render(){
        return(
            <div className = 'ChangePassword'>
                <div className = 'ChangePassword_'>
                    {(this.props.changePassSuccess !== null) ?
                        <div className = 'success-alert'>
                            <p>{this.props.changePassSuccess}</p>
                        </div> : ''}
                    {(this.props.changePassError !== null) ?
                        <div className = 'error'>
                            <p>{this.props.changePassError}</p>
                        </div> : ''}
                    {(this.state.newPass !== this.state.reNewPass) ? 
                        <div className = 'error'>
                            <p>Mật khẩu không khớp</p>
                        </div> : ''}
                    <InputComponent name='currPass' value={this.state.currPass} onChange={this.inputOnChangeHanle} 
                        margin ='10px 0 10px 0' placeholder='Nhập mật khẩu hiện tại' type='password'>
                            Nhập mật khẩu hiện tại
                    </InputComponent>
                    <InputComponent name='newPass' value={this.state.newPass} onChange={this.inputOnChangeHanle}
                    margin ='10px 0 10px 0' placeholder='Nhập mật khẩu mới' type='password'>
                        Nhập mật khẩu mới
                    </InputComponent>
                    <InputComponent name='reNewPass' value={this.state.reNewPass} onChange={this.inputOnChangeHanle}
                    margin ='10px 0 10px 0' placeholder='Nhập lại mật khẩu' type='password'>
                        Nhập lại mật khẩu
                    </InputComponent>
                    <div className = 'btnChange'>
                        <button onClick={this.ChangePassword}>Xác nhận</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        userID : state.UserReducer.id,
        changePassError : state.ErrorReducer.changePassError,
        changePassSuccess : state.AlertSuccessReducer.changePassSuccess
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePasswordRequest : (userID,currPass,newPass) => dispatch(changePasswordRequest(userID,currPass,newPass))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChangePassword);