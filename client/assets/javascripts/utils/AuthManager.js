import $ from 'jquery';

const AuthManager = {

  fetchProfile() {
    return $.ajax({
      url: "/profile.json",
      dataType: 'json'
    });
  },

  login(email,password){
    return $.ajax({
      url: "/users/sign_in",
      dataType: 'json',
      method: "post",
      data: { user: {
          email: email,
          password: password,
          remember_me: 1
      } }
    });
  },

  logout(){
    return $.ajax({
      url: "/users/sign_out",
      dataType: 'json',
      method: "delete"
    });

  }

};

export default AuthManager;
