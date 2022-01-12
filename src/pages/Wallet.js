import React from 'react';
import Header from '../components/Header';
import WalletForm from './WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h3>TrybeWallet</h3>
        <WalletForm />
      </>);
  }
}

export default Wallet;
