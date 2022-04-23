import { JsonConvert } from "json2typescript";
import { useRouter } from 'next/router';
import { Fragment, useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ApiStore from '../helpers/ApiStore';
import GlobalProperties from '../helpers/GlobalProperties';
import { http } from '../helpers/RestInterceptor';
import { SessionContext } from '../lib/SessonContext';
import { ILogin } from '../models/models';
import { User, UserDto } from '../models/user/Users';

const Registrarion = () => {
  let jsonConvert: JsonConvert = new JsonConvert();
  const { session, setSession } = useContext(SessionContext);
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  let data: ILogin = {
    identifier: identifier,
    password: password
  }

  const login = async () => {
    http
      .post(GlobalProperties.baseUrl + ApiStore.login, data)
      .then((reponse) => {
        let user:UserDto = jsonConvert.deserialize(reponse.data, User);
        console.log("user", user);
        setSession({ loggedInUser: user, isLoggedIn: true }); 
        if(user.user.usertype == 'C'){
          router.push("/profiles/job-seeker-home");
        }else if ((user.user.usertype == 'E')){
          router.push("/employer/employer-home");
        }
        
      });
  }

  return (
    <Fragment>
      <Container>
        <Row className="justify-content-xl-center">
          <Col xs lg="4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>User Id</Form.Label>
                <Form.Control type="text" placeholder="User Name Or Email" value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>

              <Button variant="primary" type="button" onClick={login}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Registrarion
