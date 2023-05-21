import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getFilm } from '../Api/Api';
import {
  WrapperCard,
  WrapperDescriptionFilm,
  ListDescriptionFilm,
  WrapperImg,
  ErorText,
  ErorWrapper,
} from './CardFilm.style';

const CardFilm = () => {
  const [searchParams] = useSearchParams('');
  const [film, setFilm] = useState([]);
  const [error, setError] = useState(false);

  const poster = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    const idImg = searchParams.get('id');
    if (idImg === null) {
      return;
    }
    const fetchImg = async () => {
      try {
        const response = await getFilm(idImg);
        if (response === undefined) {
          setError(true);
          return;
        }
        setError(false);
        setFilm([response]);
      } catch (error) {
        toast.warn(`🐷 ${error}`);
      }
    };
    fetchImg();
  }, [searchParams]);
  return (
    <>
      <div>
        {error && (
          <ErorWrapper>
            <img
              src="https://img.icons8.com/clouds/100/image.png"
              alt=""
              height="100px"
              width="100px"
            />
            <ErorText>Films not found</ErorText>
          </ErorWrapper>
        )}
        {film &&
          film.map(film => {
            return (
              <WrapperCard key={film.id} id={film.id}>
                <WrapperImg>
                  {film.poster_path !== null && (
                    <img
                      src={poster + film.poster_path}
                      alt=""
                      height="450px"
                      width="300px"
                    />
                  )}
                  {film.poster_path === null && (
                    <>
                      <img
                        src="https://img.icons8.com/clouds/100/image.png"
                        alt=""
                        height="100px"
                        width="100px"
                      />
                      <p>Image not found</p>
                    </>
                  )}
                </WrapperImg>
                <WrapperDescriptionFilm>
                  <h3>{film.title}</h3>
                  <ListDescriptionFilm>
                    <li>
                      {film.budget !== 0 && <p>Budget: {film.budget}$.</p>}
                      {film.budget === 0 && <p>Budget: no information.</p>}
                    </li>
                    <li>
                      <p>Duration: {film.runtime} minutes.</p>
                    </li>
                    <li>
                      <p>Rating: {film.vote_average}.</p>
                    </li>
                    <li>
                      <p>Overview: {film.overview}</p>
                    </li>
                  </ListDescriptionFilm>
                </WrapperDescriptionFilm>
              </WrapperCard>
            );
          })}
      </div>
    </>
  );
};
export default CardFilm;
