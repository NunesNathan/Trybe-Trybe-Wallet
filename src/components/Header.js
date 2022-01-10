import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>header</h1>
        <span>
          {`Email: ${email}`}
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropType.string.isRequired,
};

function mapStateToProps(state) {
  return { email: state.user.email };
}

export default connect(mapStateToProps)(Header);
