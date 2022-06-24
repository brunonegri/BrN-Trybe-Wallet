import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Table extends React.Component {
  // state = {
  //   description: '',
  //   tag: '',
  //   method: '',
  //   value: '',
  //   currency: '',
  // }

  render() {
    // console.log(this.props);
    return (
      <div>
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
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currency: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

// Table.propTypes = {
//   getCurrencies: PropTypes.func.isRequired,
// };

export default connect(mapStateToProps)(Table);
