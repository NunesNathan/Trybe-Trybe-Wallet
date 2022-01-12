import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h3>TrybeWallet</h3>
        <WalletForm />
        <ExpensesTable />
      </>);
  }
}

export default Wallet;
