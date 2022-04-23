import { Col, Container, Row } from 'react-bootstrap';


const EmployerHome = () => {

    return (
        <Container>
            <Row className="justify-content-xl-left">
                <Col xl lg="12">
                    <b >Employer Home Profile</b> 
                </Col>
            </Row>
            <Row className="justify-content-xl-left">
                <Col xs lg="12">
                    
                    <table border="0" cellSpacing="0" width="100%">
                        <tr>
                            <td colSpan="4"><b>Company Information</b> <i className="fa fa-pencil"></i> <hr /></td>
                        </tr>
                        <tr>
                            <td>Name</td><td>Joydev Das</td>
                            <td>Phone</td><td>Joydev Das</td>
                        </tr>
                        <tr>
                            <td colSpan="1">Email</td><td colSpan="3">Joydev Das</td>
                        </tr>
                        <tr>
                            <td colSpan="1">Address</td><td colSpan="3">Joydev Das</td>
                        </tr>
                    </table>
                </Col>
            </Row>
            <Row className="justify-content-xl-left">
                <Col xs lg="12">
                    <br/>
                    <table border="0" cellSpacing="0" width="100%">
                        <tr>
                            <td ><b>Address Summary</b> <i className="fa fa-pencil"></i> <hr /></td>
                        </tr>
                        <tr>
                            <td>
                                <b>Kolkata</b> Kolkata address<br/>
                                Working 12 years as Java full stack implementation
                                Since 2011 to 2022
                                <hr />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>TCS</b> Senior Associate<br/>
                                Working 12 years as Java full stack implementation
                                Since 2011 to 2022
                                <hr />
                            </td>
                        </tr>
                    </table>
                </Col>
            </Row>
            
        </Container>
    );
}

export default EmployerHome
