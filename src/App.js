import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route
        path="/"
        exact
      >
        <Header />
        <Login />
        <Footer />
      </Route>
      <Route
        path="/carteira"
        exact
      >
        <Header />
        <Wallet />
        <Footer />
      </Route>
    </Switch>
  );
}

export default App;
