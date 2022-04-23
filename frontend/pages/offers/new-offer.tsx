
import Link from 'next/link';
import { useState } from 'react';
import { Badge, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { http } from '../../helpers/RestInterceptor';
import { IOffers } from '../../models/models';
import { useRouter } from 'next/router';
import ApiStore from '../../helpers/ApiStore';

const NewJobOffer = () => {

    const init: IOffers = {
        additionalSkills: '', jobDescrption: '', jobTitle: '', location: '', primarySkills: '', salary: '', addSkills: []
    }

    const [addSkills, setAddSkills] = useState([]);

    const [formState, setFormState] = useState(init);

    const handleClick = () => {
        debugger;
        formState.additionalSkills = addSkills;
        console.log("form state", formState);
        http
            .post('http://localhost:1337' + ApiStore.offers.create, formState)
            .then((response) => {
               /*  console.debug("User response", response);
                const result: UserDto = jsonConvert.deserialize(reponse.data, User);

                console.debug("User registered", result); */
              //  router.push("/employer/employer-details")
              
              console.log("res", response);
            });
    }

    const additionalSkills = (event) => {
        if (event.key === 'Enter') {
            console.log("Enter", event.target.value)
            // setFormState({...formState, addSkills.push(event.target.value)});
            addSkills.push(event.target.value);

            event.target.value = ''
        }
        console.log(addSkills);
    };

    return (
        <Container>
            <Row className="justify-content-xl-center">
                <Col xs lg="2">
                    Offer new jobs
                    <Row>
                        <Link href="/offers/mine" >
                            <a>My offers</a>
                        </Link>
                    </Row>
                </Col>
                <Col xs lg="10">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control type="email" placeholder="Job Title" value={formState.jobTitle}
                            onChange={(e) => setFormState({ ...formState, jobTitle: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Job Description</Form.Label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                            onChange={(e) => setFormState({ ...formState, jobDescription: e.target.value })}>{formState.jobDescription}</textarea>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="text" placeholder="Salary afford" value={formState.salary}
                            onChange={(e) => setFormState({ ...formState, salary: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Primary Skill</Form.Label>
                        <Form.Control type="text" placeholder="Primary Skills required" value={formState.primarySkills}
                            onChange={(e) => setFormState({ ...formState, primarySkills: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Additional Skill</Form.Label>
                        <Form.Control type="text" placeholder="Additional Skills required"
                            onKeyPress={additionalSkills} />
                        <div>
                            <div>
                                {addSkills.map((skill: string, index: number) => {
                                    return (
                                        <Badge bg="secondary">{skill} <span className="fa fa-times"></span></Badge>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Location" value={formState.location}
                            onChange={(e) => setFormState({ ...formState, location: e.target.value })} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={handleClick}>
                        Submit
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default NewJobOffer
