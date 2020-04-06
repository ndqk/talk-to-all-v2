import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeAvataRequest} from '../../../store/actions/UserAction';
import './ChangeAvata.css';
import Avata from '../../Templates/Avata';

class ChangeAvata extends Component{
    constructor(props){
        super(props);
        this.state = {
            avata  : ''
        }
        this.fileOnChangeHandle = this.fileOnChangeHandle.bind(this);
        this.changeAvataRequest = this.changeAvataRequest.bind(this);
    }
    fileOnChangeHandle(event){
        let that = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
        reader.onload = function(event) {
            //console.log(event.target.result);
            that.setState({
                avata : event.target.result
            })
        };
        console.log(url);
        //reader.readAsText(file);
    }
    changeAvataRequest(){
        let newAvata = {base64 : this.state.avata};
        this.props.changeAvataRequest(this.props.userID,newAvata);
    }
    render(){
        return(
            <div className = 'ChangeAvata'>
                {(this.props.changeAvataSuccess !== null) ?
                    <div className = 'success-alert'>
                        <p>{this.props.changeAvataSuccess}</p>       
                    </div> : ''}
                <div className = 'previewAvata'>
                    <Avata height = '70px' width = '70px' shape='Circle' src={this.state.avata}/>
                </div>
                <div className = 'chooseFile'>
                    <input onChange={this.fileOnChangeHandle} type = 'file'/>
                </div>
                <div className = 'btnChange'>
                    <button onClick={this.changeAvataRequest}>Xác nhận</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userID : state.UserReducer.id,
        changeAvataSuccess : state.AlertSuccessReducer.changeAvataSuccess
    }
}

const mapDispatchToPops = dispatch => {
    return {
        changeAvataRequest : (userID,newAvata) => dispatch(changeAvataRequest(userID,newAvata))
    }
}

export default connect(mapStateToProps,mapDispatchToPops)(ChangeAvata);