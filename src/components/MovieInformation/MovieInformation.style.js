import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperCard = styled.div`
  margin-top: 20px;
`;
export const Card = styled.div`
  display: flex;
  justify-content: left;
`;
export const CardListInfoWrapper = styled.div`
  margin-left: 20px;
`;
export const CardListInfo = styled.ul`
  list-style: none;
  padding: 0;
`;
export const LinkWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const LinkMoreInfo = styled(NavLink)`
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 23px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
  background-color: orangered;
`;
export const WrapperMoreInfo = styled.div`
  width: 100%;
  border: 1px solid orangered;
  border-radius: 4px;
`;
