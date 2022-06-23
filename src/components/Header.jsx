import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrenciesThunk, fetchCurrenciesRate } from '../actions/index';

class Header extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    const { dispatchRates } = this.props;
    dispatchRates();
    getCurrencies();
  }

  render() {
    // console.log(this.props);
    const { email } = this.props;
    return (
      <div className="header">
        <h1 className="title">TRYBE WALLET</h1>
        <div className="user-info">
          <div>
            <span
              className="user-email"
              data-testid="email-field"
            >
              {`Usuario: ${email}`}

            </span>
            Despesa Total R$:
            <span
              className="user-despeses"
              data-testid="total-field"
            >
              0

            </span>
            <span data-testid="header-currency-field"> BRL</span>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currency: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrenciesThunk()),
  dispatchRates: () => dispatch(fetchCurrenciesRate()),
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  dispatchRates: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
