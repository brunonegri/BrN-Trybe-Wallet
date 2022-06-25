// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCYS,
  ADD_EXPENSES,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  ID_TO_EDIT,
  EDIT_FORM,
} from '../actions/actionTypes';

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
  case EDIT_EXPENSE:
    return { ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.payload.expense.id) {
          return action.payload.expense;
        }

        return expense;
      }),
      editor: false,
    };
  case EDIT_FORM:
    return { ...state,
      editor: true,
    };

  case ID_TO_EDIT:
    return { ...state,
      idToEdit: action.payload.id,
    };

  default:
    return state;
  }
};

export default wallet;
