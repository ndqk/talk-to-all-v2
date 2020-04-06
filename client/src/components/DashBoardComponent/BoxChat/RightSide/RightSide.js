import React, {Component} from 'react';
import '../../../Css/RightSide.css';

import InforBox from './InforBox/InforBox';
import SettingBox from './SettingBox/SettingBox';

class RightSide extends Component{
    render(){
        return(
            <div className = 'RightSide'>   
                <InforBox/>
                <SettingBox/>
            </div>
        );
    }
}

export default RightSide;