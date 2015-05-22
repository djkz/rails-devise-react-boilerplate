import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Input from 'react-bootstrap/lib/Input';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import Alert from 'react-bootstrap/lib/Alert';

const Login = React.createClass({
  displayName: 'Login',

  onLogin(e){
      e.preventDefault();
      this.props.onLoginSubmit(this.refs.email.getValue(), this.refs.password.getValue());
  },

  onSignUp(){
      this.props.onSignUp();
      this.props.onRequestHide();
  },

  render() {

    var error = this.props.error ? <Alert bsStyle="danger">{this.props.error}</Alert> : ""
    var mr = {marginRight: "15px" };
    return (
        <Modal {...this.props} title='Login' animation={false}>
            <form className='form-horizontal'>
                <div className='modal-body'>
                    {error}
                    <Input autoFocus type='email' label='Email' labelClassName='col-xs-2' wrapperClassName='col-xs-10' ref="email" />
                    <Input type='password' label='Password' labelClassName='col-xs-2' wrapperClassName='col-xs-10' ref="password" />
                </div>
                <div className='modal-footer'>
                    <ButtonInput style={mr} type="submit" value="Login" bsStyle="primary" onClick={this.onLogin} />
                    <div> <a href="#" onClick={this.onSignUp}>Sign Up For An Account</a></div>
                </div>
            </form>
        </Modal>

    );
  }
});

export default Login;
