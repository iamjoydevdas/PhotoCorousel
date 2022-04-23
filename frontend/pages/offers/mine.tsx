
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import Offers from '../../components/offers/offers';


const JobOffer = () => {
    return (
        <Container>
            <Row className="justify-content-xl-center">
                <Col xs lg="2">
                    My Job Offers
                    <Row>
                        <Link href="/offers/new-offer" >
                            <a>Post a new Job Offer</a>
                        </Link>
                    </Row>
                </Col>
                <Col xs lg="10">
                    <Row>
                        <Col xs="10">
                            <Offers />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default JobOffer
