import React, {Component} from 'react';
import {connect} from 'react-redux';
import {openModal} from '../../../store/actions/ModalAction';
import './ProfileSetting.css';

import TextLabel from '../../Templates/TextLabel';
import Avata from '../../Templates/Avata';
import ChangePassword from './ChangePassword';
import ChangeAvata from './ChangeAvata';
import ChangeName from './ChangeName';


class ProfileSetting extends Component{
    render(){
        return(
            <div className = 'ProfileSetting'>
                <div className = 'ProfileSettingItem'>
                    <TextLabel color = 'lightgray'>Tài khoản</TextLabel>
                    <div className = 'inforProfile'>
                        <Avata height = '50px' width = '50px' shape = 'Circle' src={this.props.user.avata}></Avata>
                        <TextLabel fontWeight = 'lighter'>{this.props.user.fullname}</TextLabel>
                    </div>
                </div>
                <div className = 'ProfileSettingItem'>
                    <TextLabel color = 'lightgray'>Ảnh đại diện</TextLabel>
                    <div className = 'inforProfile'>
                    <TextLabel onClick={()=>this.props.showNextModal('Ảnh đại diện', <ChangeAvata/>)} fontWeight = 'lighter' color = '#3578E5' cursor ='pointer'>Đổi ảnh đại diện</TextLabel>
                    </div>
                </div>
                <div className = 'ProfileSettingItem'>
                    <TextLabel color = 'lightgray'>Tên</TextLabel>
                    <div className = 'inforProfile'>
                    <TextLabel onClick={()=>this.props.showNextModal('Tên', <ChangeName/>)} fontWeight = 'lighter' color = '#3578E5' cursor ='pointer'>Đổi tên</TextLabel>
                    </div>
                </div>
                {/* <div className = 'ProfileSettingItem'>
                    <TextLabel color = 'lightgray'>Email</TextLabel>
                    <div className = 'inforProfile'>
                    <TextLabel onClick={()=>this.props.showNextModal('Ảnh đại diện', <ChangeAvata/>)} fontWeight = 'lighter' color = '#3578E5' cursor ='pointer'>Đổi Email</TextLabel>
                    </div>
                </div> */}
                <div className = 'ProfileSettingItem'>
                    <TextLabel color = 'lightgray'>Mật khẩu</TextLabel>
                    <div className = 'inforProfile'>
                    <TextLabel onClick={()=>this.props.showNextModal('Mật khẩu', <ChangePassword/>)} fontWeight = 'lighter' color = '#3578E5' cursor ='pointer'>Đổi mật khẩu</TextLabel>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user : state.UserReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showNextModal : (name,content) => dispatch(openModal(name,content))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileSetting);