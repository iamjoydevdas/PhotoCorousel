
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import { Fragment, useState } from 'react';
import {IPhoto} from '../../models/models'
import {http} from '../../helpers/RestInterceptor'

const Registrarion = () => {
  const router = useRouter()
  const albumId = router.query.album;
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  http
    .get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos?albumId='+albumId)
    .then((response) => {
      setPhotos(response.data);
    })

  return (
    <Fragment>
      <Container>
          Hello {albumId}

          {photos.map((pic: IPhoto, index: number) => {
              return  <div>
                        <div style={{float: 'left'}}>
                          
                          <p>{pic.title}</p>
                          <p>{pic.url}</p>
                        </div>
                      </div>
            })}

      </Container>
    </Fragment>
  );
}

export default Registrarion
