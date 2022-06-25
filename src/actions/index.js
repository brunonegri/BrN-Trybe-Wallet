// Coloque aqui suas actions
import {
  LOGIN,
  ADD_EXPENSES,
  GET_CURRENCYS,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  ID_TO_EDIT,
  EDIT_FORM,
} from './actionTypes';
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

const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

const editExpense = (expense) => ({
  type: EDIT_EXPENSE,
  payload: { expense },
});

const editForm = () => ({
  type: EDIT_FORM,
});

const getIdToEdit = (id) => ({
  type: ID_TO_EDIT,
  payload: { id },
});

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
  deleteExpense,
  editExpense,
  getIdToEdit,
  editForm,
};
