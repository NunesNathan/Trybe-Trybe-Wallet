import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import { expenseThunk } from '../actions';
import { fetchCurrencyOptions } from '../helpers/currencyAPI';

class WalletForm extends Component {
  constructor() {
    super();

    const alimentacao = 'Alimentação';
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      currencies: [],
      methods: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      destinations: [alimentacao, 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
      disabled: true,
      hasFetch: false,
    };
  }

  componentDidMount() {
    this.getCurrencies();
  }

  getCurrencies = async () => {
    const result = await fetchCurrencyOptions();
    this.setState({
      currencies: result,
      hasFetch: true,
    });
  }

  verifyEntries = () => {
    const { value, description } = this.state;
    if (value.length > 0 && description.length > 0) {
      this.setState({
        disabled: false,
      });
    }
  }

  changeValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => this.verifyEntries());
  }

  saveExpense = () => {
    const { id, value, description, currency, method, tag } = this.state;
    const { dispatch } = this.props;
    const expense = { id, value, currency, method, tag, description };

    dispatch(expenseThunk(expense));
    this.setState({
      id: id + 1,
      value: '',
      description: '',
    });
  }

  render() {
    const { value, hasFetch,
      description, currencies, methods,
      destinations, disabled } = this.state;
    return (
      <main>
        <Input
          id="value"
          test="value-input"
          label="Valor"
          placeholder="Insira o valor"
          type="number"
          value={ value }
          changeValue={ this.changeValue }
        />
        <Input
          id="description"
          test="description-input"
          label="Descrição"
          placeholder="Insira a descrição"
          type="text"
          value={ description }
          changeValue={ this.changeValue }
        />
        {
          hasFetch
          && (
            <label htmlFor="currency">
              Moeda:
              <select
                id="currency"
                name="currency"
                data-testid="currency-input"
                onChange={ this.changeValue }
              >
                {
                  currencies.map(({ currency: curr, currencyStatus: { name } }) => (
                    <option
                      value={ curr }
                      id={ name }
                      key={ curr }
                      data-testid={ curr }
                    >
                      { curr }
                    </option>
                  ))
                }
              </select>
            </label>)
        }
        <Select
          id="method"
          test="method-input"
          label="Método de pagamento"
          toMap={ methods }
          changeValue={ this.changeValue }
        />
        <Select
          id="tag"
          test="tag-input"
          label="Tag"
          toMap={ destinations }
          changeValue={ this.changeValue }
        />
        <Button
          text="Adicionar despesa"
          test="send-btn"
          disabled={ disabled }
          onClick={ this.saveExpense }
        />
      </main>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropType.func.isRequired,
};

export default connect()(WalletForm);
