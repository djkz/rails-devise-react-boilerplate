import alt from '../FluxAlt';

class AuthActions {
  
  fetchProfile(url, displaySpinner) {
    this.dispatch(displaySpinner);
    authManager.fetchProfile(url)
    .then((profile) => this.actions.updateProfile(profile),
          (errorMessage) => this.actions.updateProfileError(errorMessage));
  }

  updateProfile(profile) {
    this.dispatch(profile);
  }
}

export default alt.createActions(AuthActions);
