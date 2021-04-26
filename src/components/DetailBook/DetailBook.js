import { Component } from "react";
import { Button, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

class DetailBook extends Component {

  componentDidMount() {
    const { match: { params } } = this.props;

    const { fetchBook, fetchImages } = this.props
    fetchBook(params.id);
    fetchImages();
  }

  render() {
    const { book, images } = this.props;
    let img = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjDms-79SRGuBOTMDUaLAmuDNT6EaVcj2GOR9jN2Uh6jtWrYHU";
    if (typeof book != 'undefined' && typeof images != 'undefined') {
      if (typeof images != 'undefined') {
        if (typeof images.results != 'undefined') {
          if (images.results.length > 0) {
            const index = Math.floor((Math.random() * images.results.length));
            img = (images.results[index].urls.small)
          }
  
        }
      }

    }
    // let image = this.imageDefault;
    // const { books, isLoading, images } = this.props;

    return (
      <>
        <h1>Detail Book</h1>
        <Row>
          <Col>
            <img src={img} alt="" />
          </Col>
          <Col>
            <h3>{(typeof book != 'undefined') ? book.titulo : ''}</h3>
            <h5>By {(typeof book != 'undefined') ? book.autor : ''} </h5>
            <div>
              {(typeof book != 'undefined') ? book.descripcion : ''}<br />
            </div>
            <Link to={`/buy/${book.id}`}>
              <Button color="success" block>Buy Now<br />$us {(typeof book != 'undefined') ? book.precio : ''}</Button>
            </Link>
            <h4>
              $us <b>{(typeof book != 'undefined') ? book.precio : ''}</b>
            </h4>
          </Col>
        </Row>
      </>
    )
  }
}

export default DetailBook;