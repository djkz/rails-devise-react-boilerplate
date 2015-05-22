import React from 'react';
import NavItem from 'react-bootstrap/lib/NavItem';
import ModalTrigger from 'react-bootstrap/lib/ModalTrigger';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';
import Login from '../components/Login';

const LoginLogout = React.createClass({
  displayName: 'LoginLogout',

  getInitialState() {
      return this.getStoreState();
  },

  getStoreState() {
    return {
        auth: AuthStore.getState()
    };
  },

  componentDidMount() {
    AuthStore.listen(this.onChange);
    AuthActions.fetchProfile(true);
  },

  componentWillUnmount() {
      AuthStore.unlisten(this.onChange);
  },

  onChange() {
    this.setState(this.getStoreState());
  },

  onLogout() {
      AuthActions.logout();
  },

  onLogin() {
      AuthActions.showLogin();
  },

  onLoginSubmit(email, password) {
      AuthActions.login(email, password);
  },

  render() {
    var profile = this.state.auth.profile;
    var login_logout = "";

    if( profile.user_id ){
        login_logout = <NavItem eventKey={1} href='#' onClick={this.onLogout}>Logout</NavItem>;
    } else {
        login_logout = <ModalTrigger modal={<Login error={this.state.auth.loginError} onLoginSubmit={this.onLoginSubmit}/>}><NavItem eventKey={1} href='#'>Login</NavItem></ModalTrigger>;
    }

    return (
        login_logout
    );
  }
});

export default LoginLogout;
