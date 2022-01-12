import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      </table>
    );
  }
}

const mapStateToProps = (state) => (
  {
    expenses: state.wallet.expenses,
  });

export default connect(mapStateToProps)(ExpensesTable);
