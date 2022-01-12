import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getEmail } from '../actions';
import Button from '../components/Button';
import Input from '../components/Input';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
      toGo: false,
    };
  }

  verifyEntries = () => {
    const { email, password } = this.state;
    const minLength = 6;
    /* regex https://stackoverflow.com/questions/46155/how-to-validate-an-email-address
    -in-javascript porém com alteração */
    if (email.match(/^[^\s@!#$%"'&*()]+@[^\s@!#$%"'&*()]+\.com+$/)
      && password.length >= minLength) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  onClick = () => {
    const { dispatch } = this.props;
    const { email } = this.state;
    dispatch(getEmail(email));
    this.setState({
      toGo: true,
    });
  }

  changeValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => this.verifyEntries());
  }

  render() {
    const { email, password, disabled, toGo } = this.state;
    return (
      <main>
        <h2>Login</h2>
        <Input
          id="email"
          test="email-input"
          label="email"
          placeholder="Insira seu email"
          type="email"
          value={ email }
          changeValue={ this.changeValue }
        />
        <Input
          id="password"
          test="password-input"
          label="senha"
          placeholder="Insira sua senha"
          type="password"
          value={ password }
          changeValue={ this.changeValue }
        />
        <Button
          text="Entrar"
          test="login"
          disabled={ disabled }
          onClick={ this.onClick }
        />
        {toGo
          && <Redirect to="/carteira" />}
      </main>);
  }
}

Login.propTypes = {
  dispatch: PropType.func.isRequired,
};

export default connect()(Login);
