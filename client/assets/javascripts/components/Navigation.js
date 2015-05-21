import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';

const Navigation = React.createClass({
  displayName: 'Navigation',

  propTypes: {
    user: React.PropTypes.object
  },

  render() {
    const user = this.props.user;

    return (
        <Navbar></Navbar>
    );
  }
});

export default Navigation;
