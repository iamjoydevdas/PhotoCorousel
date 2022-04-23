
import { Form, Container, ListGroup, Row, Col } from 'react-bootstrap'
import { Fragment } from 'react';
import JobsTable from '../../components/jobs/jobs'


const Registrarion = () => {
    return (
        <Fragment>
            <Container>
                <Row className="justify-content-xl-center">
                    <Col xs lg="2">
                        <ListGroup>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs lg="10">
                        <Row>
                            <JobsTable />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Registrarion
