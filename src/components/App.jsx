import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
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
    <div>
      {/* <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchFilms />} />
          <Route path="/search/:id" element={<FilmDetails />}>
            <Route path="more" element={<AdditionalInformation />}></Route>
          </Route>
          <Route path="*" exact={true} component={<GenericNotFound />} />
        </Route>
        <Route path="*" exact={true} component={<GenericNotFound />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/search"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <SearchFilms />
              </Suspense>
            }
          />
          <Route
            path="/search/:id"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <FilmDetails />
              </Suspense>
            }
          >
            <Route path="more" element={<AdditionalInformation />} />
          </Route>
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<h2>Loading ...</h2>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};
