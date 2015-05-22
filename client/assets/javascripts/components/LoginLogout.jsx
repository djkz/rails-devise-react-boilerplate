import React from 'react';
import NavItem from 'react-bootstrap/lib/NavItem';
import ModalTrigger from 'react-bootstrap/lib/ModalTrigger';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import OverlayMixin from 'react-bootstrap/lib/OverlayMixin';

const LoginLogout = React.createClass({
    mixins: [OverlayMixin],
  displayName: 'LoginLogout',

  getInitialState() {
      return  this.getStoreState()
  },

  getStoreState() {
    var auth = AuthStore.getState()

    var wasModalOpen = this.state ? this.state.isModalOpen : false;
    var isModalOpen =  auth.profile.user_id ? false : wasModalOpen ;

    return {
        auth: auth,
        isModalOpen: isModalOpen
    };
  },

  componentDidMount() {
    AuthStore.listen(this.onChange);
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

  onSignUp() {
      this.setState({
          isModalOpen: true
      });
  },

  onRequestHide() {
      this.setState({
          isModalOpen: false
      });
  },

  onLoginSubmit(email, password) {
      AuthActions.login(email, password);
  },

  onSignUpSubmit(name, email, password, confirmation) {
      AuthActions.signUp(name, email, password, confirmation );
  },

  render() {
    var profile = this.state.auth.profile;
    var login_logout = "";

    if( profile.user_id ){
        login_logout = <NavItem eventKey={1} href='#' onClick={this.onLogout}>Logout</NavItem>;
    } else {
        login_logout = <ModalTrigger modal={
            <Login error={this.state.auth.loginError}
                onSignUp={this.onSignUp}
                onLoginSubmit={this.onLoginSubmit}/>
        }><NavItem eventKey={1} href='#'>Login</NavItem></ModalTrigger>;
    }

    return (
        login_logout
    );
  },

  renderOverlay() {
      if( !this.state.isModalOpen ){
          return <span />;
      } else {
          return (
              <SignUp 
                  errors={this.state.auth.signUpErrors}
                  onRequestHide={this.onRequestHide}
                  onSubmit={this.onSignUpSubmit}/>
          );
      }
  }

});

export default LoginLogout;
