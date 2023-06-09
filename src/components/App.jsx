import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const SearchFilms = lazy(() => import('pages/SearchFilms'));
const FilmDetails = lazy(() => import('pages/FilmDetails'));
const NotFound = lazy(() => import('pages/NotFound'));

const AdditionalInformation = lazy(() =>
  import(
    'components/MovieInformation/AdditionalInformation/AdditionalInformation'
  )
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchFilms />} />
          <Route path="/search/:id" element={<FilmDetails />}>
            <Route path="more" element={<AdditionalInformation />}></Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
