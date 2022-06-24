import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  tableExpenses() {
    const { expenses } = this.props;
    return expenses.map((
      { value, description, currency, method, tag, id, exchangeRates },
    ) => (
      <tr key={ id }>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ parseFloat(value).toFixed(2) }</td>
        <td>{ (exchangeRates[currency].name.split('/')[0]) }</td>
        <td>{ (parseFloat(exchangeRates[currency].ask)).toFixed(2) }</td>
        <td>
          {
            (parseFloat(value) * parseFloat(exchangeRates[currency].ask)).toFixed(2)
          }
        </td>
        <td>Real</td>

      </tr>
    ));
  }

  render() {
    // console.log(expenses);
    // console.log(this.props);
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {this.tableExpenses()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);
