import styled from 'styled-components';

export const FilmTitle = styled.h2`
  text-align: center;
`;
export const FilmList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  width: 100%;
  list-style: none;
`;
export const FilmItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

export const FilmImg = styled.img`
  max-width: 360px;
`;
