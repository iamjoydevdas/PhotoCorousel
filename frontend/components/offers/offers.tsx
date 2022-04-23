import { Fragment, useEffect, useState } from 'react';
import { IOffers } from '../../models/models';
import { http } from '../../helpers/RestInterceptor';
import { Badge, Button, Col, Container, Form, Row } from 'react-bootstrap';



const Offers = () => {

    let con = useEffect();
    const [jobs, setJobs] = useState<IOffers[]>([]);
    const init: () => {
        con:() => {
            http
                .get<IOffers[]>('http://localhost:1337/jobs')
                .then((response) => {
                    console.log(response);
                    setJobs(response.data);
                    console.log("Job", jobs)
                })
                .catch((ex) => {

                });
        })
    }
    return (

        <div>
            {
                jobs.map((job: IOffers, index: number) => {
                    return (
                        <div class="card" className="Margin-40" >
                            <div class="card-header">
                                {job.jobTitle}
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>{job.jobDescrption}</p>
                                    <footer class="blockquote-footer">
                                        Skills needed <Badge bg="secondary">{job.primarySkills}</Badge> Salary <Badge bg="secondary">{job.salary}</Badge>
                                        <br />
                                        Location <cite title="Source Title">{job.location}</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Offers
