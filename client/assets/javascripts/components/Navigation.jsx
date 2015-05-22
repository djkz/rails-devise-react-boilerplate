import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';
import LoginLogout from '../components/LoginLogout';

const Navigation = React.createClass({
  displayName: 'Navigation',

  getInitialState() {
      return this.getStoreState();
  },

  getStoreState() {
    return {
    };
  },

  componentDidMount() {
  },

  componentWillUnmount() {
  },

  onChange() {
  },

  render() {

    return (
        <Navbar brand="Slirc">
             <Nav navbar right>
                 <LoginLogout />
             </Nav>
        </Navbar>
    );
  }
});

export default Navigation;
