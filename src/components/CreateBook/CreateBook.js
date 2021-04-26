import { Component } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
import { withRouter } from 'react-router-dom';

class CreateBook extends Component {

  constructor() {
    super();
    this.state = {
      titulo: "",
      descripcion: "",
      precio: "",
      autor: "",
      modal: false
    };


  }

  toggle = () => this.setState({ modal: !this.state.modal });

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // const { addBook, history } = this.props;
    const { addBook } = this.props;
    addBook(this.state);

    this.setState({
      titulo: "",
      descripcion: "",
      precio: "",
      autor: "",
      modal: true
    });

  }

  handleOnChange = (e) => {
    console.log("aqui");
    const { target: { value, name } } = e;

    this.setState({
      [name]: value,
    });

  }



  render() {
    return (
      <>
        <h1>Create new Book</h1>
        <Form onSubmit={this.handleOnSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Title</Label>
            <Input type="text" name="titulo" value={this.state.titulo} onChange={this.handleOnChange} required />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">description</Label>
            <Input type="textarea" name="descripcion" value={this.state.descripcion} onChange={this.handleOnChange} required />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Price</Label>
            <Input type="text" name="precio" value={this.state.precio} onChange={this.handleOnChange} required />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Author</Label>
            <Input type="text" name="autor" value={this.state.autor} onChange={this.handleOnChange} required />
          </FormGroup>
          <Button color="success">Send book</Button>
        </Form>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>Mensaje</ModalHeader>
            <ModalBody>
              your book was registered
        </ModalBody>
          </Modal>
        </div>
      </>
    );
  }
}

export default withRouter(CreateBook);