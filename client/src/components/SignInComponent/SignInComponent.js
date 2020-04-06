import React, {Component} from 'react';
import md5 from 'md5';
import {Link} from 'react-router-dom';
import '../Css/SignInComponent.css';
import {connect} from 'react-redux';
import {loginRequest,loginResponse} from '../../store/actions/LoginAction';

import InputComponent from '../Templates/InputComponent';
import ButtonComponent from '../Templates/ButtonComponent';

class SignInComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        }
        this.inputOnChangeHandle = this.inputOnChangeHandle.bind(this);
        this.loginRequest = this.loginRequest.bind(this);
        
    }
    componentDidMount(){
        this.props.loginResponse();
    }
    inputOnChangeHandle(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    loginRequest(){
        let data = {
            username : this.state.username,
            password : md5(this.state.password)
        }
        this.props.loginRequest(data);
    }
    render(){
        return(
            <div className = 'SignInComponent'>
                <div className = 'LogoSignIn'>
                    <h2>TALK TO ALL</h2>
                </div>
                {this.props.loginError ? <div className='error'>
                    <p>Tài khoản hoặc mật khẩu không chính xác</p>
                </div> : ''}
                <InputComponent name='username' value={this.state.username} onChange={this.inputOnChangeHandle} type='text' placeholder = 'Username' margin = '10px 0 10px 0'/>
                <InputComponent name='password' value={this.state.password} onChange={this.inputOnChangeHandle} type='password' placeholder = 'Password' margin = '10px 0 10px 0'/>
                <div>
                    <ButtonComponent onClick = {this.loginRequest} styleButton = {styleButton}>Sign in</ButtonComponent>
                </div>
                <Link to ='sign-up'>Don't have account ? Sign Up.</Link>
            </div>
        );
    }
}

const styleButton = {
    width : '100px',
    height : '50px',
    border : 'solid 1px lightgrey',
    borderRadius : '20px',
    backgroundColor : 'white',
    margin : '10px 0 10px 0'
}

const mapStateToProps = state => {
    return {
        loginError : state.LoginReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginRequest : (data) => dispatch(loginRequest(data)),
        loginResponse : () => dispatch(loginResponse())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInComponent);