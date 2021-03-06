// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { EXCLUDE_EXPENSE, SAVE_EXPENSE } from '../actions';

const initialState = {
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_EXPENSE:
    if (state.expenses.length > 0) {
      return { expenses: [...state.expenses, action.payload] };
    }
    return { expenses: [action.payload] };
  case EXCLUDE_EXPENSE:
    return { expenses: state.expenses.filter(({ id }) => id !== action.id) };
  default:
    return state;
  }
};

export default wallet;
