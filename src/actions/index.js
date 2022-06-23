// Coloque aqui suas actions
import { LOGIN, ADD_EXPENSES, GET_CURRENCYS } from './actionTypes';
import fetchApi from '../services/Api';

const userLogin = (value) => ({
  type: LOGIN,
  payload: value,
});

const addExpenses = (value) => ({
  type: ADD_EXPENSES,
  payload: value,
});

const getCurrencies = (value) => ({
  type: GET_CURRENCYS,
  payload: value,
});

const fetchCurrenciesThunk = () => (dispatch) => {
  fetchApi().then((resp) => {
    dispatch(getCurrencies(resp));
  });
};

export { userLogin, addExpenses, getCurrencies, fetchCurrenciesThunk };
