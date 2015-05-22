import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';
import Alert from 'react-bootstrap/lib/Alert';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';

const Login = React.createClass({
  displayName: 'Login',

  onLogin(){
      this.props.onLoginSubmit(this.refs.email.getValue(), this.refs.password.getValue());
  },

  render() {

    var error = this.props.error ? <Alert bsStyle="danger">{this.props.error}</Alert> : ""
    return (
        <Modal {...this.props} title='Login' animation={true}>
            <div className='modal-body'>
              <form className='form-horizontal'>
                 {error}
                <Input type='text' label='Email' labelClassName='col-xs-2' wrapperClassName='col-xs-10' ref="email" />
                <Input type='password' label='Password' labelClassName='col-xs-2' wrapperClassName='col-xs-10' ref="password" />
              </form>
            </div>
            <div className='modal-footer'>
                <Button onClick={this.onLogin}>Login</Button>
            </div>
        </Modal>

    );
  }
});

export default Login;
