import { useLocation } from 'react-router-dom';
import SearchFilm from '../components/SearchFilm/Search.film';
const SearchFilms = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <SearchFilm />
    </div>
  );
};
export default SearchFilms;
