// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCYS, ADD_EXPENSES, DELETE_EXPENSE } from '../actions/actionTypes';

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
      expenses: [...state.expenses, { ...action.payload.expenses }],
    };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: [...state.expenses.filter(
        (elemento) => (elemento.id !== action.payload),
      )],

    };
  default:
    return state;
  }
};

export default wallet;
