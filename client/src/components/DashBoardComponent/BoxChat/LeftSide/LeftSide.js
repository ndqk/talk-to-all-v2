import React, {Component} from 'react';
import '../../../Css/LeftSide.css';

import HomeMenu from './HomeMenu/HomeMenu';
import LeftSideContent from './LeftSideContent/LeftSideContent';

class LeftSide extends Component{
    render(){
        return(
            <div className = 'LeftSide'>
                <HomeMenu/>
                <LeftSideContent/>
            </div>
        );
    }
}

export default LeftSide;