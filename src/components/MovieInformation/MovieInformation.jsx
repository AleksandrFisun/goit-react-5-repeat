import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import Loader from 'loader/Loader';

import { getFilm } from 'components/Api/Api';
import {
  Card,
  WrapperCard,
  CardListInfo,
  LinkMoreInfo,
  CardListInfoWrapper,
  WrapperMoreInfo,
  LinkWrapper,
} from './MovieInformation.style';

const MovieInformation = () => {
  const [film, setFilm] = useState([]);
  const [visibleMore, setVisibleMore] = useState(false);
  const { id } = useParams();
  const poster = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();

  useEffect(() => {
    if (id === null) {
      return;
    }
    const fetchImg = async () => {
      try {
        const response = await getFilm(id);
        if (response === undefined) {
          return;
        }
        setFilm([response]);
      } catch (error) {
        console.log(`🐷 ${error}`);
      }
    };
    fetchImg();
  }, [id]);
  const onClickMore = () => {
    setVisibleMore(!visibleMore);
  };

  return (
    <>
      {film &&
        film.map(data => {
          return (
            <WrapperCard key={data.id}>
              <Card>
                <div>
                  {data.poster_path !== null && (
                    <img
                      src={poster + data.poster_path}
                      alt=""
                      height="450px"
                      width="300px"
                    />
                  )}
                  {data.poster_path === null && (
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
                </div>
                <CardListInfoWrapper>
                  <CardListInfo>
                    <li>
                      <h2>{data.title}.</h2>
                    </li>
                    <li>Budget: {data.budget}$</li>
                    <li>
                      <p>Original language: {data.original_language}</p>
                    </li>
                    <li>
                      <p>Popularity: {data.popularity}</p>
                    </li>
                    <li>
                      <p>Status: {data.status}</p>
                    </li>
                  </CardListInfo>
                  <LinkWrapper>
                    <LinkMoreInfo
                      to="more"
                      state={{ from: location }}
                      onClick={onClickMore}
                    >
                      More Info
                    </LinkMoreInfo>
                  </LinkWrapper>
                  {visibleMore && (
                    <WrapperMoreInfo>
                      <Suspense
                        fallback={
                          <div>
                            <Loader />
                          </div>
                        }
                      >
                        <Outlet />
                      </Suspense>
                    </WrapperMoreInfo>
                  )}
                </CardListInfoWrapper>
              </Card>
            </WrapperCard>
          );
        })}
    </>
  );
};
export default MovieInformation;
