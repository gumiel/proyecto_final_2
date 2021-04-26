/* eslint-disable */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBooks } from '../../actions/bookActions';
import { fetchImages } from '../../actions/ImageActions';
import Books from './Books';

const mapStateToProps = ({ book, image }) => {

  return ({
    books: book.books,
    total: 12,
    isLoading: book.isLoading,
    images: image.images
  });
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchBooks,
      fetchImages
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Books);