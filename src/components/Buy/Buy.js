import { Button, Card, CardBody, CardImg, CardText, Col, CustomInput, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { useParams } from 'react-router-dom'
import useFetch from '../../shared/hooks/useFetch';
import { useState } from "react";
// import CartService from "../../services/CartService";
const Buy = (prop) => {

  const { id } = useParams()

  const [cart, setCart] = useState({ country: '', first_name: '', last_name: '', street_address: '', apt_suite: '', city: '', state: '', zip_code: '', phone_number: '', compony_name: '' });
  const [book] = useFetch('Libro', 'GET', { id });



  const handleOnChange = (e) => {
    setCart({
      ...cart,
      [e.target.name]: e.target.value,
    });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // const response = await CartService.addCart(cart);

    setCart({ country: '', first_name: '', last_name: '', street_address: '', apt_suite: '', city: '', state: '', zip_code: '', phone_number: '', compony_name: '' });
    toggle();

    // history.push('/');
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <h1>Shippping Addres</h1>
      <Row>
        <Col sm="8">
          <Form onSubmit={handleOnSubmit}>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <CustomInput type="select" name="country" id="country" onChange={handleOnChange} required>
                <option value="">Country</option>
                <option value="Argentina">Argentina</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Chile">Chile</option>
                <option value="United States">United States</option>
              </CustomInput>

            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="first_name"
                placeholder="Firts Name"
                value={cart.first_name}
                onChange={handleOnChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={cart.last_name}
                onChange={handleOnChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="street_address"
                placeholder="Street Address"
                value={cart.street_address}
                onChange={handleOnChange}
                required
              />
            </FormGroup>

            <Row>
              <Col>
                <FormGroup>
                  <Input
                    type="text"
                    name="apt_suite"
                    placeholder="Apt/Suite (opcional)"
                    value={cart.apt_suite}
                    onChange={handleOnChange}
                  />
                </FormGroup>
              </Col>
              <Col></Col>
            </Row>


            <FormGroup>
              <Input
                type="text"
                name="city"
                placeholder="City"
                value={cart.city}
                onChange={handleOnChange}
                required
              />
            </FormGroup>

            <Row>
              <Col>
                <FormGroup>
                  <Input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={cart.state}
                    onChange={handleOnChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Input
                    type="text"
                    name="zip_code"
                    placeholder="Zip Code"
                    value={cart.zip_code}
                    onChange={handleOnChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>




            <FormGroup>
              <Input
                type="text"
                name="phone_number"
                placeholder="Phone Number"
                value={cart.phone_number}
                onChange={handleOnChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Input
                type="text"
                name="compony_name"
                placeholder="Company Name (Optional)"
                value={cart.compony_name}
                onChange={handleOnChange}

              />
            </FormGroup>
            <Button type="submit" color="primary" size="lg" block>Send Order</Button>
          </Form>
        </Col>









        <Col sm="4">
          <h3>Order Summary</h3>
          <Card>
            <Row>
              <Col sm="4">
                <CardImg top width="50px" height="150px" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjDms-79SRGuBOTMDUaLAmuDNT6EaVcj2GOR9jN2Uh6jtWrYHU" alt="Card image cap" />
              </Col>
              <Col sm="8">
                <h5><b>{book.titulo}</b></h5>
                <div><b>By</b> {book.autor}</div>
                {book.descripcion}
              </Col>
            </Row>
            <CardBody>
              <CardText tag="div">
                <hr />
                Shipping: Free
                <hr />
                Estimated Tax: $us 0.00
                <hr />
                Order Total: $us {book.precio}
              </CardText>
            </CardBody>
          </Card>
          <Button type="button" color="success" size="lg" block>CONTINUE</Button>
        </Col>
      </Row>
      <div>

        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Mensaje</ModalHeader>
          <ModalBody>
            your order was registered
        </ModalBody>
        </Modal>
      </div>
    </>
  );
}

export default Buy;