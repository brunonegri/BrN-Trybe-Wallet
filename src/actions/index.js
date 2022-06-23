// Coloque aqui suas actions
import { LOGIN, ADD_EXPENSES, GET_CURRENCYS } from './actionTypes';
import fetchApi from '../services/Api';

const userLogin = (value) => ({
  type: LOGIN,
  payload: value,
});

const getCurrencies = (value) => ({
  type: GET_CURRENCYS,
  payload: Object.keys(value).filter((moeda) => moeda !== 'USDT'),
});

const addExpenses = (expenses) => async (dispatch) => {
  const data = await fetchApi();
  delete data.USDT;
  expenses.exchangeRates = data;
  dispatch({
    type: ADD_EXPENSES,
    payload: { expenses },
  });
};

const fetchCurrenciesThunk = () => (dispatch) => {
  fetchApi().then((resp) => {
    dispatch(getCurrencies(resp));
  });
};

export {
  userLogin,
  addExpenses,
  getCurrencies,
  fetchCurrenciesThunk,
};
