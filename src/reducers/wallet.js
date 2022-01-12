// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SAVE_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: '',
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_EXPENSE:
    if (state.expenses.length > 0) {
      return { expenses: [...state.expenses, action.payload] };
    }
    return { expenses: [action.payload] };
  default:
    return state;
  }
};

export default wallet;
