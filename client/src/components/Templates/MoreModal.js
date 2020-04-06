import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeModal,openPrevModal} from '../../store/actions/ModalAction';
import './MoreModal.css';
import TextLabel from '../Templates/TextLabel';

class MoreModal extends Component{
    render(){
        const modalStyle = {
            opacity : this.props.opacity
        }
        return(
            <div className = 'MoreModal' style ={modalStyle} >
                <div className = 'HeadModal'>
                    <TextLabel>{this.props.NameModal[this.props.NameModal.length-1]}</TextLabel>
                </div>
                {(this.props.NameModal.length > 1) ? <div className = 'PrevBtnModal'>
                    <img onClick={()=>this.props.openPrevModal()} src='leftarrow.svg' alt=''/>
                </div> : ''}
                <div className = 'HideModal'>
                    <span onClick={()=>this.props.closeModal()}>Xong</span>
                </div>
                <div className = 'modalContent'>
                    {this.props.ContentModal[this.props.ContentModal.length - 1]}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        NameModal : state.ModalReducer.NameModal,
        ContentModal : state.ModalReducer.ContentModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal : () => dispatch(closeModal()),
        openPrevModal : () => dispatch(openPrevModal())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MoreModal);