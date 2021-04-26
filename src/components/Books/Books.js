import { Component } from 'react';
import { Row, Col, Spinner } from 'reactstrap';
import CardBook from './CardBook';

class Books extends Component {

  componentDidMount() {
    const { fetchBooks, fetchImages } = this.props

    fetchImages();
    fetchBooks();

  }

  render() {
    const { books, isLoading, images } = this.props;

    if (isLoading) {
      return (<div><h1>Loading....<Spinner type="grow" color="primary" /></h1></div>);
    } else {
      if (typeof books != 'undefined' && typeof images != 'undefined') {
        return (
          <>
            <h1>Book list</h1>
            <p>
              The online commerce platform and reading community of independent bookstores.
More than a million books marketed in Spain and where to get them.</p>
            <Row>
              {
                books.map((book, index) => (
                  <Col sm={3} key={index}>
                    <CardBook images={images} key={book.id} book={book}></CardBook>
                  </Col>
                ))
              }
            </Row>
          </>
        );
      } else {
        return (<div><h1>Cargando....</h1></div>);
      }

    }

  }
}

export default Books;