import React, {Component} from 'react';
import '../../../Css/MidSide.css';

import HeadBoxChat from './HeadBoxChat/HeadBoxChat';
import ContentBoxChat from './ContentBoxChat/ContentBoxChat';
import InputBoxChat from './InputBoxChat/InputBoxChat';

class MidSide extends Component{
    render(){
        return(
            <div className = 'MidSide'>
                <HeadBoxChat/>
                <ContentBoxChat/>
                <InputBoxChat/>
            </div>
        );
    }
}

export default MidSide;