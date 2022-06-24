import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  state = {
    total: 0,
  }

  totalExpenses = () => {
    const { expenses } = this.props;
    let acc = 0;

    expenses.forEach(({ value, currency, exchangeRates }) => {
      acc += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
    });

    return acc;
  }

  render() {
    console.log(this.props);
    const { email } = this.props;
    const { total } = this.state;
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
              value={ total }
            >
              {this.totalExpenses().toFixed(2)}

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
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrenciesThunk()),
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape(
    PropTypes.objectOf(),
  )).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
