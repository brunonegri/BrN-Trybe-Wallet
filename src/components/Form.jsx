import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  state = {
    price: '',
    currencies: '',
    payment: 'Dinheiro',
    category: 'Alimentação',
    description: '',
    btnDisable: true,
  }

  handleChange =({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.props);
    const { price, currencies, payment, category, description, btnDisable } = this.state;
    const { currency } = this.props;
    return (
      <div className="form-main">
        <label htmlFor="price-input">
          Valor
          <input
            onChange={ this.handleChange }
            data-testid="value-input"
            id="price-input"
            type="text"
            value={ price }
            name="price"
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
        <label htmlFor="payment-input">
          Método de Pagamento
          <select
            onChange={ this.handleChange }
            data-testid="method-input"
            value={ payment }
            name="payment"
            id="payment-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de dédito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category-input">
          Categoria:
          <select
            onChange={ this.handleChange }
            data-testid="tag-input"
            name="category"
            value={ category }
            id="category-input"
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
        <button disable={ btnDisable } type="submit">Adicionar Despesa</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
});

Form.propTypes = {
  currency: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Form);
