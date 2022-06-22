// Coloque aqui suas actions
import LOGIN from './actionTypes';

const userLogin = (value) => ({
  type: LOGIN,
  payload: value,
});

export default userLogin;
