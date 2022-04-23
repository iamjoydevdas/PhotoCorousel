import { Container, Navbar, Table, Pagination } from 'react-bootstrap'
import { Fragment, useState } from 'react';
import { IJobs } from '../../models/models';
import { http } from '../../helpers/RestInterceptor';



let active = 1;
let items: any[] = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const JobsTable = () => {

  const [jobs, setJobs] = useState<IJobs[]>([]);

  http
    .get<IJobs[]>('http://localhost:1337/jobs', {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    })
    .then((response) => {
      setJobs(response.data);
    })
    .catch((ex) => {

    });


  return (
    <Fragment>
      <Container>
        <Table striped hover >
          <tbody>
            {jobs.map((job: IJobs, index: number) => {
              return <tr>
                <td>
                  <article>
                    <h2>{job.name}</h2>
                    <h5>{job.publisher}</h5>
                    <p>{job.description}</p>
                    <button>Apply</button>
                  </article>
                </td>
              </tr>
            })}
          </tbody>
        </Table>

      </Container>
      <Pagination>{items}</Pagination>
    </Fragment>
  );
}

export default JobsTable
