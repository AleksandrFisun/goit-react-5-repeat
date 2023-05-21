import { useState } from 'react';
import {} from './SearchFilm.style';

const SearchFilm = () => {
  const [nameFilm, setNameFilm] = useState('');

  const onSubmitFilm = e => {
    e.preventDefault();
    setNameFilm(e.target.value);
    setNameFilm('');
  };

  const onChangeFilm = e => {
    setNameFilm(e.target.value);
  };

  console.log(nameFilm);
  return (
    <div>
      <form action="" onSubmit={onSubmitFilm}>
        <input
          type="text"
          placeholder="Search film"
          value={nameFilm}
          onChange={onChangeFilm}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
};
export default SearchFilm;
