import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmQuery } from '../Api/Api';
import {
  ImgItem,
  CardWrapper,
  CardList,
  CardText,
  CardLink,
  SearchBar,
  Button,
  Form,
  Input,
} from './SearchFilm.style';

const SearchFilm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(
    searchParams.get('query') !== null ? searchParams.get('query') : ''
  );
  const [films, setFilms] = useState([]);
  const filmName = searchParams.get('query');
  const location = useLocation();


  const poster = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    if (filmName === '') {
      return;
    }
    const fetchImg = async () => {
      try {
        const response = await getFilmQuery(filmName);
        if (response.total_results === 0) {
          console.log('💩 No results found');
          return;
        }
        setFilms(response.results);
      } catch (error) {
        return console.log(`🐷 ${error}`);
      }
    };

    fetchImg();
  }, [filmName]);

  const onSubmitFilm = e => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    setSearchParams({ query: query });
  };

  const onChangeFilm = e => {
    const film = e.target.value;
    setQuery(film);
  };

  return (
    <>
      <SearchBar>
        <Form action="" onSubmit={onSubmitFilm}>
          <Input
            type="text"
            placeholder="Search film"
            value={query}
            onChange={onChangeFilm}
          />
          <Button type="submit"></Button>
        </Form>
      </SearchBar>
      <div>
        <CardList>
          {films &&
            films.map(film => {
              return (
                <li key={film.id}>
                  <CardLink to={`${film.id}`} state={{ from: location }}>
                    <CardWrapper>
                      {film.poster_path !== null && (
                        <ImgItem
                          src={poster + film.poster_path}
                          alt={film.title}
                        />
                      )}
                      {film.poster_path === null && (
                        <>
                          <ImgItem
                            src="https://img.icons8.com/clouds/100/image.png"
                            alt={film.title}
                          />
                          <p>Image not found</p>
                        </>
                      )}
                      <CardText>{film.title}</CardText>
                    </CardWrapper>
                  </CardLink>
                </li>
              );
            })}
        </CardList>
      </div>
    </>
  );
};
export default SearchFilm;
