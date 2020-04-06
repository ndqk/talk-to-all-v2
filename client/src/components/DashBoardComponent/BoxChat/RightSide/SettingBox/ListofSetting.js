import React, {Component} from 'react';
import '../../../../Css/ListofSetting.css';

import TextLabel from '../../../../Templates/TextLabel';

class ListofSetting extends Component{
    constructor(props){
        super(props);
        this.state = {
            headStyle : {
                backgroundImage: 'url("leftarrow.svg")'
            },
            contentStyle : {
                display : 'none'
            }
        }
        this.toggleList = this.toggleList.bind(this);
    }
    toggleList(){
        if(this.state.headStyle.backgroundImage === 'url("leftarrow.svg")')
            this.setState({
                headStyle : {
                    backgroundImage : 'url("downarrow.svg")'
                },
                contentStyle : {
                    display : 'block'
                }
            })
        else
            this.setState({
                headStyle : {
                    backgroundImage : 'url("leftarrow.svg")'
                },
                contentStyle : {
                    display : 'none'
                }
            })
    }
    render(){
        return(
            <div className='ListofSetting'>
                <div className='ListHead' onClick={this.toggleList}>
                    <TextLabel>{this.props.nameList}</TextLabel>
                    <div className='ListState'>
                        <div style={this.state.headStyle}>

                        </div>
                    </div>
                </div>
                <div className='ListContent' style={this.state.contentStyle}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ListofSetting;