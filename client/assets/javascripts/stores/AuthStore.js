import alt from '../FluxAlt';
import AuthActions from '../actions/AuthActions';

const defaultProfile = {user_id: '', name: ''};

class AuthStore {
  constructor() {
    this.ajaxSending = false;
    this.bindListeners({
      handleFetchProfile: AuthActions.FETCH_PROFILE,
      handleFetchProfileError: AuthActions.FETCH_PROFILE_ERROR
    });
  }

  handleFetchProfile(displaySpinner) {
    if (displaySpinner) {
      this.ajaxSending = true;
    }
  }

  handleFetchProfileError() {
    this.ajaxSending = false;
  }

}

export default alt.createStore(AuthStore, 'AuthStore');
