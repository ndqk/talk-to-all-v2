import React, {Component} from 'react';
import '../../../../Css/SearchInput.css'
import InputComponent from '../../../../Templates/InputComponent'

class SearchInput extends Component{
    render(){
        return(
            <div className = 'SearchInput'>
                <InputComponent margin = '10px 0 10px 0' placeholder = 'Tìm kiếm'/>
            </div>
        );
    }
}

export default SearchInput