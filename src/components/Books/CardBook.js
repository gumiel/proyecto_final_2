import { Component } from "react";
import PropTypes from 'prop-types';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

class CardBook extends Component {

  imageDefault = 'https://images.cdn1.buscalibre.com/fit-in/360x360/23/75/2375445be09c8484a7b8eb94b098a7bc.jpg'

  constructor() {
    super();

    this.state = {
      image: {}
    };
  }


  handleClick = (id) => {
    window.location = `/book/${id}`;
  }

  componentDidMount() {

    let image = this.imageDefault;
    if (typeof this.props.images != 'undefined') {
      if (typeof this.props.images.results != 'undefined') {
        if (this.props.images.results.length > 0) {
          const index = Math.floor((Math.random() * this.props.images.results.length));
          image = (this.props.images.results[index].urls.small)
        }

      }
    }

    this.setState((prevState) => ({
      image: image
    }));
  }

  render() {

    return (
      // (this.props.images.result[0].urls.small) ?:
      // <Card onClick={() => this.handleClick(this.props.book.id)}>
      <Card style={{marginBottom: "20px"}}>
        <Link to={`book/${this.props.book.id}`}>
          <CardImg top width="100%" src={this.state.image} alt="Card image cap" style={{ maxHeight: "150px" }}/>
        </Link>
        <CardBody>
          <CardTitle tag="h5">
            <Link to={`book/${this.props.book.id}`}>
              {this.props.book.titulo}
            </Link>
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">By {this.props.book.autor} </CardSubtitle>
          <CardText >
            {this.props.book.descripcion}<br/>
            <span className="text-warning">Price:</span> $us {this.props.book.precio}
          </CardText>
        </CardBody>
      </Card>
    );
  }

}
CardBook.propTypes = {
  book: PropTypes.object
};

export default CardBook;