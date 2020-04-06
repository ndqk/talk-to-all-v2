import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

import SignUpComponent from './components/SignUpComponent/SignUpComponent';
import SignInComponent from './components/SignInComponent/SignInComponent';
import Generation from './components/Generation/Generation';

class App extends Component {
  render(){
    return (
          <Router>
            <div className = 'App'>
              <Switch>
                <Route path = '/' exact>
                   {this.props.isLogin ? <Generation/> : <Redirect to = 'sign-in' />}
                </Route>
                <Route path = '/sign-in' exact>
                  {!this.props.isLogin ? <SignInComponent/> : <Redirect to = '/' />}
                </Route>
                <Route path = '/sign-up' exact>
                  {!this.props.isLogin ? <SignUpComponent/> : <Redirect to = '/' />}
                </Route>
              </Switch>
            </div>
          </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin : state.LoginReducer.userID,
  }
}

export default connect(mapStateToProps)(App);
