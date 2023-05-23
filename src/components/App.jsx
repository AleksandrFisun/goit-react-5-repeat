import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import {
  Searchbar,
  Link,
  Nav,
  NavList,
  NavItem,
  Logotype,
  LogotypeWrapper,
  LogotypeText,
} from './Global.style';
// import SharedLayout from './SharedLayout/SharedLayout';
import AdditionalInformation from '../components/MovieInformation/AdditionalInformation/AdditionalInformation';
import Home from '../pages/Home';
import SearchFilms from '../pages/SearchFilms';
import FilmDetails from '../pages/FilmDetails';
import NotFound from '../pages/NotFound';

// const Home = lazy(() => import('pages/Home'));
// const SearchFilms = lazy(() => import('pages/SearchFilms'));
// const FilmDetails = lazy(() => import('pages/FilmDetails'));
// const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <>
      <Searchbar>
        <Nav>
          <LogotypeWrapper>
            <Logotype />
            <LogotypeText>Cloud of Films</LogotypeText>
          </LogotypeWrapper>
          <NavList>
            <NavItem>
              <Link to="/" end>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/search">Search Film</Link>
            </NavItem>
          </NavList>
        </Nav>
      </Searchbar>
      <Routes>
        {/* <Route path="/" element={<SharedLayout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchFilms />} />
        <Route path="/search/:id" element={<FilmDetails />}>
          <Route path="more" element={<AdditionalInformation />} />
        </Route>
        <Route path="*" component={<NotFound />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};
