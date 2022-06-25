import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import FormEdit from '../components/FormEdit';

import '../css/Wallet.css';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    // console.log(this.props);
    const { editor } = this.props;
    return (
      <div className="wallet-container">
        <Header />
        {editor === true ? <FormEdit /> : <Form />}
        <Table />
      </div>);
  }
}

Wallet.propTypes = {
  editor: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  editor: state.wallet.editor,
});

export default connect(mapStateToProps)(Wallet);
