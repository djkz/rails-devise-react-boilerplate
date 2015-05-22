import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Input from 'react-bootstrap/lib/Input';
import Alert from 'react-bootstrap/lib/Alert';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';

const Login = React.createClass({
  displayName: 'Login',

  onLogin(e){
      e.preventDefault();
      this.props.onLoginSubmit(this.refs.email.getValue(), this.refs.password.getValue());
  },

  render() {

    var error = this.props.error ? <Alert bsStyle="danger">{this.props.error}</Alert> : ""
    var fl = {float: "left" };
    return (
        <Modal {...this.props} title='Login' animation={true}>
            <form className='form-horizontal'>
                <div className='modal-body'>
                    {error}
                    <Input type='email' label='Email' labelClassName='col-xs-2' wrapperClassName='col-xs-10' ref="email" />
                    <Input type='password' label='Password' labelClassName='col-xs-2' wrapperClassName='col-xs-10' ref="password" />
                </div>
                <div className='modal-footer'>
                    <Input type="submit" label="Login" onClick={this.onLogin} />
                    <div > <a href="#">Sign Up For An Account</a></div>
                </div>
            </form>
        </Modal>

    );
  }
});

export default Login;
