import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import TrendingFilms from '../components/TrendingFilms/TrendingFilms';
import { Modal } from '../Modal/Modal';
import CardFilm from '../components/CardFilm/CardFilm';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (searchParams.get('id') === null) {
      setModalVisible(false);
      return;
    }
    setModalVisible(true);
  }, [searchParams]);

  const onClickCard = e => {
    const id = e.currentTarget.id;
    const nextParams = id !== '' ? { id } : {};
    setSearchParams(nextParams);
  };

  const onCloseBackdrop = () => {
    setModalVisible(false);
    setSearchParams('');
  };

  return (
    <>
      <TrendingFilms onClickIdFilm={onClickCard} />
      {modalVisible && (
        <Modal onCloseBackdrop={onCloseBackdrop}>
          <CardFilm />
        </Modal>
      )}
    </>
  );
};

export default Home;
