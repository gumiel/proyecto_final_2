import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addBook } from '../../actions/bookActions';
import CreateBook from './CreateBook';

// const mapStateToProps = ({ auth }) => ({ user: auth.user, token: auth.token });
const mapStateToProps = ({ data }) => ( {} );

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addBook,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook);
