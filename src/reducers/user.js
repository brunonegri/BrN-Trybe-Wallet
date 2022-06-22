// Esse reducer será responsável por tratar as informações da pessoa usuária
import LOGIN from '../actions/actionTypes';

const initialState = {
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN:
    return { ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
