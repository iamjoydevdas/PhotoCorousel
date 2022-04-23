
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ApiStore from '../helpers/ApiStore';
import { http } from '../helpers/RestInterceptor';
import { IRegister } from '../models/models';
import { User, UserDto } from '../models/user/Users';
import { JsonConvert } from "json2typescript";

const Registrarion = () => {
  const router = useRouter()
  const init: IRegister = {
    username: '',
    email: '',
    password: '',
    usertype: "E"
  }

  const [formState, setFormState] = useState(init);

  const handleClick = () => {

    console.log("form state", formState);
    http
      .post('http://localhost:1337' + ApiStore.register, formState)
      .then((response) => {
        console.debug("User response", response);
        const result: UserDto = jsonConvert.deserialize(reponse.data, User);

        console.debug("User registered", result);
        router.push("/employer/employer-details")
      });
  }

  return (
    <Fragment>
      <Container>
        <Row className="justify-content-xl-center">
          <Col xs lg="4">
            <Link href="/registration"><a href="#registration">Registered as jobseeker</a></Link>
          </Col>
        </Row>
        <Row className="justify-content-xl-center">
          <Col xs lg="4">
            <Link href="/registration"><a href="#registration">Registered as jobseeker</a></Link>
          </Col>
        </Row>
        <Row className="justify-content-xl-center">
          <Col xs lg="4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Valid Orgranization Email Address" value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="test" placeholder="Orgranization User Name" value={formState.username}
                onChange={(e) => setFormState({ ...formState, username: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={formState.password}
                onChange={(e) => setFormState({ ...formState, password: e.target.value })} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleClick} >
              Submit
            </Button>
          </Col>

        </Row>
      </Container>
    </Fragment>
  );
}

export default Registrarion
