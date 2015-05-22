import alt from '../FluxAlt';
import AuthActions from '../actions/AuthActions';

const defaultProfile = {user_id: null, name: null}

class AuthStore {
  constructor() {
    this.profile = defaultProfile;
    this.ajaxSending = false;
    this.loginError = null;
    this.signUpErrors = null;
    this.bindListeners({
      handleLogin: AuthActions.LOGIN,
      handleLogout: AuthActions.LOGOUT,
      handleUpdateLoginError: AuthActions.UPDATE_LOGIN_ERROR,
      handleFetchProfile: AuthActions.FETCH_PROFILE,
      handleUpdateProfile: AuthActions.UPDATE_PROFILE,
      handleUpdateProfileError: AuthActions.UPDATE_PROFILE_ERROR,
      handleUpdateSignUpError: AuthActions.UPDATE_SIGN_UP_ERROR,
      handleSignUp: AuthActions.SIGN_UP
    });
  }

  handleShowLogin(){
      this.showLogin = true;
  }

  handleLogout(){
      this.profile = defaultProfile;
  }

  handleLogin(user){
      const profile = {user_id: user.id, name: user.name }
      this.profile = profile;
      this.loginError = null;
  }
  
  handleSignUp(user){
      const profile = {user_id: user.id, name: user.name }
      this.profile = profile;
      this.signUpErrors = null;
  }

  handleUpdateLoginError(response){
      this.loginError = response.responseJSON.error;
  }

  handleUpdateSignUpError(response){
      this.signUpErrors = response.responseJSON.errors;
  }

  handleFetchProfile(displaySpinner) {
    if (displaySpinner) {
      this.ajaxSending = true;
    }
  }

  handleUpdateProfile(profile) {
      this.profile = profile;
      this.ajaxSending = false;
  }

  handleUpdateProfileError() {
    this.ajaxSending = false;
  }

}

export default alt.createStore(AuthStore, 'AuthStore');
