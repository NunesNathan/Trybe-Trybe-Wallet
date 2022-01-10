// Esse reducer será responsável por tratar as informações da pessoa usuária

import { SAVED_EMAIL } from '../actions';

const initialState = {
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case SAVED_EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default user;
