import $ from 'jquery';

const AuthManager = {

  fetchProfile(url) {
    return $.ajax({
      url: url,
      dataType: 'json'
    });
  }

};

export default AuthManager;
