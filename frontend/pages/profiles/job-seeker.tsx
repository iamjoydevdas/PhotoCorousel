import axios from 'axios';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ApiStore from '../../helpers/ApiStore';
import GlobalProperties from '../../helpers/GlobalProperties';
import { IJobSeerkerRegistration } from '../../models/models';
import { useRouter } from 'next/router';
import {http} from '../../helpers/RestInterceptor'

const JobSeekerRegistrarion = () => {
    const router = useRouter();

    const initState: IJobSeerkerRegistration =  {
        fname: '',
        lname: '',
        address: '',
        resumeId: '',
        currentOrg: '',
        exp: '',
        userIdMapping:'',
        skill: ''
    }

    const [formState, setFormState] = useState(initState);

    const [per, setPer] = useState(0);
    const uploadPercentage = (value, total) => Math.round(value / total * 100);
    let state = {
        files: null,
        percent: 0
    };

    formState.userIdMapping = router.query._id;


    /**
     * This method will upload the file and push to profile
     * @param event 
     */
    const upload = async (event) => {
        state.files = event.target.files;
        const data = new FormData();
        data.append("files", state.files[0]);
        console.log("files", data);
        const result = await http({
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmM2YzdmY2M0ZmVlMmRiY2QyOWM5YiIsImlhdCI6MTY0MDE2Nzg0NiwiZXhwIjoxNjQyNzU5ODQ2fQ.CXMmRUYQU7AOd5xUZz6BVnnICTLBc2rLZ8yNo057R18'
            },
            url: GlobalProperties.baseUrl + ApiStore.upload,
            data,
            onUploadProgress: (progress) => {
                console.log("state.percent", state.percent);
                state.percent = uploadPercentage(progress.loaded, progress.total);
                setPer(state.percent);
                console.log("state.percent 1", state.percent);
            }
        });
        event.preventDefault();
        formState.resumeId = result.data[0].id || '';
    }

    /**
     * Handles submit and create the job seeker profile
     */
    const handleSubmit = () => {
        console.log("as", formState);

        http
        .post<IJobSeerkerRegistration[]>('http://localhost:1337' + ApiStore.jobseeker.create, formState, {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000,
        })
        .then((response) => {
           router.push("/login");
        })
        .catch((ex) => {
  
        });
    }

    return (
        <Container>
            <Row className="justify-content-xl-center">
                <Col xs lg="4">
                    <b>JobSeeker Profile</b>
                </Col>
            </Row>
            <Row className="justify-content-xl-center">
                <Col xs lg="4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Your First Name" value={formState.fname}
                            onChange={  (e) => setFormState({...formState,fname:e.target.value})  } />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" value={formState.lname}
                            onChange={(e) => setFormState({...formState,lname:e.target.value}) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="address" value={formState.address}
                            onChange={(e) => setFormState({...formState,address: e.target.value}) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Years of Experience</Form.Label>
                        <Form.Control type="text" placeholder="experience" value={formState.exp}
                            onChange={(e) => setFormState({...formState,exp: e.target.value}) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Skills</Form.Label>
                        <Form.Control type="text" placeholder="skills" value={formState.skill}
                            onChange={(e) => setFormState({...formState,skill: e.target.value}) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Current Org</Form.Label>
                        <Form.Control type="text" placeholder="skills" value={formState.currentOrg}
                            onChange={(e) => setFormState({...formState,currentOrg: e.target.value}) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Upload Resume</Form.Label>
                        <Form.Control type="file" placeholder="skills"
                            onChange={(e) => upload(e)} />
                        <div className="Progress">
                            <div className="ProgressBar" style={{ width: `${per}%` }}></div>
                        </div>
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={handleSubmit}  >
                        Submit
                    </Button>
                </Col>

            </Row>
        </Container>
    );
}

export default JobSeekerRegistrarion
