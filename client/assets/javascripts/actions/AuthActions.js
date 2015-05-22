import alt from '../FluxAlt';
import AuthManager from '../utils/AuthManager';

class AuthActions {
  
  fetchProfile(displaySpinner) {
    this.dispatch(displaySpinner);
    AuthManager.fetchProfile()
    .then((profile) => this.actions.updateProfile(profile),
          (errorMessage) => this.actions.updateProfileError(errorMessage));
  }

  updateProfile(profile){
      this.dispatch(profile);
  }

  updateProfileError(errorMessage){
      this.dispatch(errorMessage);
  }

  updateLoginError(errorMessage){
      this.dispatch(errorMessage);
  }

  logout(){
      AuthManager.logout()
      this.dispatch(true);
  }

  login(email,password){
      AuthManager.login(email, password)
      .then((user) => this.dispatch(user),
            (errorMessage) => this.actions.updateLoginError(errorMessage));
  }

}

export default alt.createActions(AuthActions);
