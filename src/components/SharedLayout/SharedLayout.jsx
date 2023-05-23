import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

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

const SharedLayout = () => {
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
export default SharedLayout;
