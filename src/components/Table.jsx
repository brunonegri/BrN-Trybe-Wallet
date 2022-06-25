import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense, editForm, getIdToEdit } from '../actions/index';

class Table extends React.Component {
  tableExpenses() {
    const { expenses, deleteEx, getId, enableEdit } = this.props;
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
        <td>
          <button
            data-testid="edit-btn"
            onClick={ () => {
              enableEdit();
              getId(id);
            } }
            type="button"
          >
            Editar
          </button>
          <button
            type="button"
            onClick={ () => (deleteEx(id)) }
            data-testid="delete-btn"
          >
            Excluir
          </button>

        </td>

      </tr>
    ));
  }

  render() {
    // console.log(expenses);
    // console.log(this.props);
    return (
      <table className="table-expenses">
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

const mapDispatchToProps = (dispatch) => ({
  deleteEx: (expense) => dispatch(deleteExpense(expense)),
  getId: (expenseID) => dispatch(getIdToEdit(expenseID)),
  enableEdit: (expense) => dispatch(editForm(expense)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteEx: PropTypes.func.isRequired,
  getId: PropTypes.func.isRequired,
  enableEdit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
