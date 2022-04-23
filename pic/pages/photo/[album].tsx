
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import { Fragment, useState } from 'react';
import {IPhoto} from '../../models/models'
import {http} from '../../helpers/RestInterceptor'
import { Carousel } from 'react-responsive-carousel';

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
                <Carousel interval="5000" transitionTime="5000">
                { photos.map((pic: IPhoto, index: number) => {
                    return  <div>
                               <img src={pic.url} />
                                <p className="legend">{pic.title}</p>
                            </div>
                  })}


                </Carousel>

      </Container>
    </Fragment>
  );
}

export default Registrarion
