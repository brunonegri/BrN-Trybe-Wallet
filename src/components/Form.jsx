import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses } from '../actions';

class Form extends React.Component {
  state = {
    value: '',
    currency: '',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
    exchangeRates: {},
  }

  handleChange =({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { dispatchForm } = this.props;

    dispatchForm(this.state);

    this.setState({
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
      exchangeRates: {},
    });

    console.log('clicou');
  }

  render() {
    // console.log(this.props);
    const { value, currency, method, tag, description, btnDisable } = this.state;
    const { currencys } = this.props;
    return (
      <div className="form-main">
        <div className="form-inputs">
          <label htmlFor="value-input">
            Valor
            <input
              onChange={ this.handleChange }
              data-testid="value-input"
              id="value-input"
              type="text"
              value={ value }
              name="value"
              placeholder="R$0,00"
            />
          </label>
          <label htmlFor="currency-input">
            Moeda
            <select
              onChange={ this.handleChange }
              name="currency"
              value={ currency }
              id="currency-input"
            >
              {currencys.map((moeda, index) => <option key={ index }>{ moeda}</option>)}
            </select>
          </label>
          <label htmlFor="method-input">
            Método de Pagamento
            <select
              onChange={ this.handleChange }
              data-testid="method-input"
              value={ method }
              name="method"
              id="method-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Categoria:
            <select
              onChange={ this.handleChange }
              data-testid="tag-input"
              name="tag"
              value={ tag }
              id="tag-input"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="description-input">
            Descrição
            <input
              name="description"
              onChange={ this.handleChange }
              data-testid="description-input"
              id="description-input"
              type="text"
              value={ description }
            />
          </label>
          <button
            onClick={ this.handleClick }
            disabled={ btnDisable }
            type="submit"
          >
            Adicionar Despesa

          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencys: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchForm: (expense) => dispatch(addExpenses(expense)),
  dispatchRates: () => dispatch(fetchCurrenciesRate()),
});

Form.propTypes = {
  currencys: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchForm: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
