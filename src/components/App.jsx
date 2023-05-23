import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const SearchFilms = lazy(() => import('../pages/SearchFilms'));
const FilmDetails = lazy(() => import('../pages/FilmDetails'));
const AdditionalInformation = lazy(() =>
  import(
    '../components/MovieInformation/AdditionalInformation/AdditionalInformation'
  )
);
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchFilms />} />
          <Route path="search/:id" element={<FilmDetails />}>
            <Route path="more" element={<AdditionalInformation />}></Route>
          </Route>
          <Route path="*" component={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
