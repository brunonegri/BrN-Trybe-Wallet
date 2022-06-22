import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import userLogin from '../actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disableBtn: true,
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.enableBtn());
  };

  handleClick = () => {
    const { history, dispatchLogin } = this.props;
    const { email } = this.state;

    dispatchLogin(email);
    history.push('/carteira');

    // console.log('clicou');
  }

  enableBtn=() => {
    const { email, password } = this.state;
    const numPassword = 6;
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordValidate = password.length >= numPassword;
    const validate = emailValidate.test(email) && passwordValidate;
    // console.log(validate);
    this.setState({
      disableBtn: !validate,
    });
  }

  render() {
    console.log(this.props);
    const { email, password, disableBtn } = this.state;
    return (
      <div>
        <div>
          <div>
            <span>EMAIL</span>
            <input
              data-testid="email-input"
              name="email"
              onChange={ this.handleChange }
              type="email"
              value={ email }
              placeholder="email@example.com"
            />
          </div>
          <div>
            <span>SENHA </span>
            <input
              data-testid="password-input"
              name="password"
              onChange={ this.handleChange }
              type="text"
              value={ password }
              placeholder="******"
            />
          </div>
          <button
            type="submit"
            onClick={ this.handleClick }
            disabled={ disableBtn }
          >
            Entrar

          </button>
        </div>
      </div>);
  }
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
