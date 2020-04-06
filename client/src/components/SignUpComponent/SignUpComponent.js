import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import md5 from 'md5';
import {connect} from 'react-redux';
import {signUpRequest,signUpResponse} from '../../store/actions/SignUpAction';

import '../Css/SignUpComponent.css';
import InputComponent from '../Templates/InputComponent';
import ButtonComponent from '../Templates/ButtonComponent';

class SignUpComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            fullname : '',
            username : '',
            email : '',
            password : '',
            repassword : ''
        }
        this.inputOnChangeHandle = this.inputOnChangeHandle.bind(this);
        this.signUpRequest = this.signUpRequest.bind(this);
    }
    componentDidMount(){
        this.props.signUpResponse();
    }
    inputOnChangeHandle(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    signUpRequest(){
        let data = {
            fullname : this.state.fullname,
            username : this.state.username,
            email : this.state.username,
            password : md5(this.state.password),
            repassword : md5(this.state.repassword)
        }
        if(data.password === data.repassword)
            this.props.signUpRequest(data);
    }
    render(){
        return(
            <div className = 'SignUpComponent'>
                <h2>Sign Up</h2>
                {this.props.error ? <div className = 'error'>
                    <p>Username không hợp lệ!</p>
                </div> : ''}
                {(this.state.password !== this.state.repassword) ? <div className = 'error'><p>Mật khẩu không khớp</p></div> : ''}
                <InputComponent name='fullname' value = {this.state.fullname} onChange={this.inputOnChangeHandle} placeholder = 'Full name' margin = '10px 0 10px 0'/>
                <InputComponent name='username' value = {this.state.username} onChange={this.inputOnChangeHandle} placeholder = 'Username' margin = '10px 0 10px 0'/>
                <InputComponent name='email'value = {this.state.email} onChange={this.inputOnChangeHandle} type='email' placeholder = 'Email' margin = '10px 0 10px 0'/>
                <InputComponent name='password' value = {this.state.password} onChange={this.inputOnChangeHandle} type='password' placeholder = 'Password' margin = '10px 0 10px 0'/>
                <InputComponent name='repassword' value = {this.state.repassword} onChange={this.inputOnChangeHandle}  type='password' placeholder = 'Re-password' margin = '10px 0 10px 0'/>
                <div>
                    <ButtonComponent onClick={()=>this.signUpRequest()} styleButton = {styleButton}>Sign Up</ButtonComponent>
                </div>
                <Link to = 'sign-in'>Have an account ? Sign In</Link>
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
        error : state.SignUpReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUpRequest : (data) => dispatch(signUpRequest(data)),
        signUpResponse : () => dispatch(signUpResponse())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpComponent);