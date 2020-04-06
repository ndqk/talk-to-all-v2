import React, {Component} from 'react';
import '../../../../Css/LeftSideContent.css';

import SearchInput from './SearchInput';
import Onlinelist from './OnlineList';

class LeftSideContent extends Component{
    render(){
        return(
            <div className = 'LeftSideContent'>
                <SearchInput/>
                <Onlinelist/>
            </div>
        );
    }
}

export default LeftSideContent;