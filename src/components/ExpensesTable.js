import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { realItemValue } from '../helpers/currencyAPI';
import { formatName, formatPrice } from '../helpers/allies';

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

  render() {
    const { expenses } = this.props;
    const { th } = this.state;
    return (
      <table>
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
        {
          expenses
            .map(({ id, value, currency, method, tag, description, exchangeRates }) => (
              <tr
                id={ id }
                key={ id }
              >
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{formatName(exchangeRates[currency].name)}</td>
                <td>{formatPrice(exchangeRates[currency].ask)}</td>
                <td>{formatPrice(realItemValue(exchangeRates[currency], value))}</td>
                <td>Real</td>
              </tr>))
        }
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropType.arrayOf(PropType.object).isRequired,
};

const mapStateToProps = (state) => (
  {
    expenses: state.wallet.expenses,
  });

export default connect(mapStateToProps)(ExpensesTable);
