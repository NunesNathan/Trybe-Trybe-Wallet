// Coloque aqui suas actions

import { fetchCurrency, realItemValue } from '../helpers/currencyAPI';
import { sumValue } from '../helpers/events';

// Action Types
export const SAVED_EMAIL = 'SAVED_EMAIL';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const EXCLUDE_EXPENSE = 'EXCLUDE_EXPENSE';

// Action Creators

export const getEmail = (email) => ({
  type: SAVED_EMAIL,
  email,
});

export const saveExpense = (payload) => ({
  type: SAVE_EXPENSE,
  payload,
});

export function expenseThunk({ id, value, currency, method, tag, description }) {
  return (dispatch) => {
    fetchCurrency().then((response) => {
      const realPrice = realItemValue(response[currency], value);
      sumValue(realPrice);
      const payload = {
        id,
        value,
        currency,
        method,
        tag,
        description,
        exchangeRates: response,
      };

      dispatch(saveExpense(payload));
    });
  };
}

export const excludeExpense = (id) => ({
  type: EXCLUDE_EXPENSE,
  id,
});
