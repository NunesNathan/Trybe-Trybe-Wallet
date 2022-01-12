import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    const [BRL, total] = ['BRL', 0];
    return (
      <header>
        <h1>Header</h1>
        <span data-testid="email-field">
          {`Email: ${email}`}
        </span>
        <span>
          {'total: '}
        </span>
        <span id="total-field" data-testid="total-field">
          {total}
        </span>
        <span data-testid="header-currency-field">
          {BRL}
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropType.string.isRequired,
};

function mapStateToProps(state) {
  return (
    {
      email: state.user.email,
    });
}

export default connect(mapStateToProps)(Header);
