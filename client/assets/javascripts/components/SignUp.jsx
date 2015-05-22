import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Input from 'react-bootstrap/lib/Input';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import Alert from 'react-bootstrap/lib/Alert';

const SignUp = React.createClass({
  displayName: 'SignUp',

  onSignUp(e){
      e.preventDefault();
      this.props.onSubmit(this.refs.name.getValue(),
                          this.refs.email.getValue(),
                          this.refs.password.getValue(),
                          this.refs.password_confirmation.getValue());
  },

  validationState(field) {
      var errors = this.props.errors

      if (errors && errors[field]) { return 'error' }
      else { return null }

  },

  errorText(field) {
      var errors = this.props.errors

      if (errors && errors[field]) { return errors[field][0] }
      else { return null }

  },
  render() {

    var mr = {marginRight: "15px" };
    return (
        <Modal {...this.props} title='Sign Up' animation={false}>
            <form className='form-horizontal'>
                <div className='modal-body'>
                    <Input autoFocus
                        bsStyle={this.validationState("name")}
                        help={this.errorText("name")}
                        type='text' label='Name' labelClassName='col-xs-2' wrapperClassName='col-xs-10' ref="name" />
                    <Input 
                        bsStyle={this.validationState("email")}
                        help={this.errorText("email")}
                        type='email' label='Email' labelClassName='col-xs-2' wrapperClassName='col-xs-10' ref="email" />
                    <Input 
                        bsStyle={this.validationState("password")}
                        help={this.errorText("password")}
                        type='password' label='Password' labelClassName='col-xs-2' wrapperClassName='col-xs-10' ref="password" />
                    <Input
                        bsStyle={this.validationState("password_confirmation")}
                        help={this.errorText("password_confirmation")}
                        type='password' label='Password Confirmation' labelClassName='col-xs-2' wrapperClassName='col-xs-10' ref="password_confirmation" />
                </div>
                <div className='modal-footer'>
                    <ButtonInput style={mr} type="submit" value="Sign Up" bsStyle="primary" onClick={this.onSignUp} />
                </div>
            </form>
        </Modal>

    );
  }
});

export default SignUp;
