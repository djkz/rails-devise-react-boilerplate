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

  signUp(name, email, password, password_confirmation){
    return $.ajax({
      url: "/users",
      dataType: 'json',
      method: "post",
      data: { user: {
          name: name,
          email: email,
          password: password,
          password_confirmation: password_confirmation
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
