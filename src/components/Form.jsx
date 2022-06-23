import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses } from '../actions';

class Form extends React.Component {
  state = {
    id: 0,
    value: '',
    currencies: '',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
    exchangeRates: {},
    btnDisable: true,
  }

  handleChange =({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.enableBtn());
  }

  enableBtn=() => {
    const { value, description } = this.state;
    const num = 1;
    const valueValidate = value.length > num;
    const descriptionValidate = description.length > num;
    const validate = valueValidate && descriptionValidate;
    // console.log(validate);
    this.setState({
      btnDisable: !validate,
    });
  }

  handleClick = () => {
    const { dispatchForm } = this.props;

    dispatchForm(this.state);

    this.setState({
      id: 0,
      value: '',
      currencies: '',
      method: '',
      tag: '',
      description: '',
      exchangeRates: {},
      btnDisable: true,
    });

    console.log('clicou');
  }

  render() {
    // console.log(this.props);
    const { value, currencies, method, tag, description, btnDisable } = this.state;
    const { currency } = this.props;
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
              name="currencies"
              value={ currencies }
              id="currency-input"
            >
              {currency.map((moeda, index) => <option key={ index }>{ moeda}</option>)}
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
              <option value="Cartão de dédito">Cartão de débito</option>
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
  currency: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchForm: (expense) => dispatch(addExpenses(expense)),
});

Form.propTypes = {
  currency: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchForm: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
