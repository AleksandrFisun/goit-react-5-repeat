import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Loader from '../loader/Loader';

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
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="search"
            element={
              <Suspense fallback={<Loader />}>
                <SearchFilms />
              </Suspense>
            }
          />
          <Route
            path="search/:id"
            element={
              <Suspense fallback={<Loader />}>
                <FilmDetails />
              </Suspense>
            }
          >
            <Route
              path="more"
              element={
                <Suspense fallback={<Loader />}>
                  <AdditionalInformation />
                </Suspense>
              }
            ></Route>
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};
