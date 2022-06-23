// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCYS, ADD_EXPENSES } from '../actions/actionTypes';

const initialState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case GET_CURRENCYS:
    return { ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, { ...action.payload.expenses,
        id: state.expenses.length }],
    };
  default:
    return state;
  }
};

export default wallet;
