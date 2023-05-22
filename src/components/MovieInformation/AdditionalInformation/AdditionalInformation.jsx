import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getFilm } from '../../Api/Api';
import { WrapperInfo, TextInfo } from './AdditionalInformation.style';

const AdditionalInformation = () => {
  const [film, setFilm] = useState([]);
  const { id } = useParams();

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

  return (
    <>
      {film &&
        film.map(res => {
          return (
            <WrapperInfo key={res.id}>
              <TextInfo>Release date: {res.release_date}</TextInfo>
              <TextInfo>Rating: {res.vote_average}</TextInfo>
              <TextInfo>Runtime: {res.runtime}</TextInfo>
              <TextInfo>{res.overview}</TextInfo>
            </WrapperInfo>
          );
        })}
    </>
  );
};

export default AdditionalInformation;
