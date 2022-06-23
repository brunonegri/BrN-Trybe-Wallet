import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <br />
        HELLO
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
});

// Form.propTypes = {
//   email: PropTypes.string.isRequired,
// };

export default connect(mapStateToProps)(Form);
