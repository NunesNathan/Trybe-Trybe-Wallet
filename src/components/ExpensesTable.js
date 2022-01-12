import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { realItemValue } from '../helpers/currencyAPI';
import { formatName, formatPrice } from '../helpers/allies';
import Button from './Button';
import { initialValue, minusValue, overrideValue } from '../helpers/events';
import { excludeExpense } from '../actions';

export class ExpensesTable extends Component {
  constructor() {
    super();

    this.state = {
      th: ['Descrição', 'Tag',
        'Método de pagamento', 'Valor',
        'Moeda', 'Câmbio utilizado',
        'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'],
    };
  }

  componentDidMount() {
    overrideValue(initialValue());
  }

  excludeButton = async (id, minus) => {
    const { dispatch } = this.props;
    dispatch(excludeExpense(id));
    minusValue(minus);
  }

  render() {
    const { expenses } = this.props;
    const { th } = this.state;
    return (
      <table>
        <thead>
          <tr>
            {
              th.map((each) => (
                <th
                  key={ each }
                >
                  { each }
                </th>))
            }
          </tr>
        </thead>
        <tbody>
          {expenses
            .map(({ id, value, currency, method, tag, description, exchangeRates }) => (
              <tr
                key={ id }
              >
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{formatName(exchangeRates[currency].name)}</td>
                <td>{formatPrice(exchangeRates[currency].ask)}</td>
                <td
                  className="value"
                >
                  {formatPrice(realItemValue(exchangeRates[currency], value))}
                </td>
                <td>Real</td>
                <td>
                  <Button
                    text="X"
                    test="delete"
                    disabled={ false }
                    onClick={
                      () => this.excludeButton(id,
                        formatPrice(realItemValue(exchangeRates[currency], value)))
                    }
                  />
                </td>
              </tr>))}
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropType.arrayOf(PropType.object).isRequired,
  dispatch: PropType.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    expenses: state.wallet.expenses,
  });

export default connect(mapStateToProps)(ExpensesTable);
