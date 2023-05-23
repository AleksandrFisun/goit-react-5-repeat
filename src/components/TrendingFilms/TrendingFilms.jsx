import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { getFilmsTrending } from 'components/Api/Api';
import {
  FilmList,
  FilmItem,
  FilmImg,
  FilmTitle,
} from 'components/TrendingFilms/TrendingFilms.style';

const TrendingFilms = ({ onClickIdFilm }) => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  const poster = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    const fetchImg = async () => {
      try {
        const response = await getFilmsTrending();
        if (response.total_results === 0) {
          toast.error('💩 No results found');
        }
        setTrendingFilms(response.results);
      } catch (error) {
        toast.warn(`🐷 ${error}`);
      }
    };
    fetchImg();
  }, []);
  return (
    <section>
      <FilmTitle>Trending Films</FilmTitle>
      <FilmList>
        {trendingFilms &&
          trendingFilms.map(film => {
            return (
              <FilmItem key={film.id} id={film.id} onClick={onClickIdFilm}>
                <FilmImg src={poster + film.poster_path} alt="" />
                <span>
                  {film.original_title ?? 'No name' ?? film.original_title}
                </span>
              </FilmItem>
            );
          })}
      </FilmList>
    </section>
  );
};
export default TrendingFilms;
