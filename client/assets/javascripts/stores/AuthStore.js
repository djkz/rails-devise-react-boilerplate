import alt from '../FluxAlt';
import AuthActions from '../actions/AuthActions';

const defaultProfile = {user_id: null, name: null}

class AuthStore {
  constructor() {
    this.profile = defaultProfile;
    this.ajaxSending = false;
    this.loginError = null;
    this.bindListeners({
      handleLogin: AuthActions.LOGIN,
      handleLogout: AuthActions.LOGOUT,
      handleUpdateLoginError: AuthActions.UPDATE_LOGIN_ERROR,
      handleFetchProfile: AuthActions.FETCH_PROFILE,
      handleUpdateProfile: AuthActions.UPDATE_PROFILE,
      handleUpdateProfileError: AuthActions.UPDATE_PROFILE_ERROR
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
  
  handleUpdateLoginError(response){
      this.loginError = response.responseJSON.error;
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
