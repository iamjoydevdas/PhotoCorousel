import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ApiStore from '../helpers/ApiStore';
import GlobalProperties from '../helpers/GlobalProperties';
import { http } from '../helpers/RestInterceptor';
import { IRegister } from '../models/models';

const Registrarion = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleClick = () => {
    let json: IRegister = {
      username: name,
      email: email,
      password: password,
      usertype: "C"
    }

    http
      .post<IRegister>(GlobalProperties.baseUrl + ApiStore.register, 
        json, 
        {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      })
      .then((response) => {
        router.push({
          pathname: "/profiles/job-seeker", 
          query: {"_id":response.data.user.id}
        })
      })
      .catch((ex) => {
      });

  }

  return (
    <Fragment>
      <Container>
        <Row className="justify-content-xl-center">
          <Col xs lg="4">
            <Link href="/employer-registration"><a href="#employer-registration">Registered as employer</a></Link>
          </Col>
        </Row>
        <Row className="justify-content-xl-center">
          <Col xs lg="4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Valid Email Address" value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="test" placeholder="User Name" value={name}
                onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
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
