import { useLocation } from 'react-router-dom';
import { BackLink, Section } from 'pages/Page.style';
import { useRef } from 'react';
import MovieInformation from 'components/MovieInformation/MovieInformation';

const FilmDetails = () => {
  const location = useLocation();
  const bacLinkLocation = useRef(location.state?.from ?? '/search');
  return (
    <>
      <Section>
        <BackLink to={bacLinkLocation.current}> Back</BackLink>
        <MovieInformation />
      </Section>
    </>
  );
};
export default FilmDetails;
