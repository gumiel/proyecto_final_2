/* eslint-disable */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBook } from '../../actions/bookActions';
import Buy from './Buy';

const mapStateToProps = ({ book }) => {

  return ({
    book: book.books,
    total: book.length,
    isLoading: book.isLoading,
  });
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchBook,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Buy);