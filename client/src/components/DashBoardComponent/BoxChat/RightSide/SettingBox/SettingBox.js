import React, {Component} from 'react';
import '../../../../Css/SettingBox.css';

import ListofSetting from './ListofSetting';

class SettingBox extends Component{
    render(){
        return(
            <div className='SettingBox'>
                <ListofSetting nameList='Tùy chọn'></ListofSetting>
                <ListofSetting nameList='Mọi người'></ListofSetting>
                <ListofSetting nameList='Ảnh được chia sẻ'></ListofSetting>
            </div>
        );
    }
}

export default SettingBox;