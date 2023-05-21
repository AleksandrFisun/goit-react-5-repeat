import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Searchbar,
  Link,
  Nav,
  NavList,
  NavItem,
  Logotype,
  LogotypeWrapper,
  LogotypeText,
} from './SharedLayout.style';
import Loader from '../../loader/Loader';

export const SharedLayout = () => {
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
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/search">Search Film</Link>
            </NavItem>
          </NavList>
        </Nav>
      </Searchbar>
      <main>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
