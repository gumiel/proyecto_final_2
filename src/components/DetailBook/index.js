/* eslint-disable */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBook } from '../../actions/bookActions';
import { fetchImages } from '../../actions/ImageActions';
import DetailBook from './DetailBook';

const mapStateToProps = ({ book, image }) => {

  return ({
    book: book.books,
    total: book.length,
    isLoading: book.isLoading,
    images: image.images
  });
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchBook,
      fetchImages
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DetailBook);