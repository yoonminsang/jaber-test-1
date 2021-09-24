import React from 'react';
import styled from 'styled-components';
import NavBarButton from './NavBarButton';

const NavBarHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 16px;
  color: ${(props) => props.theme.grey1};
  background: ${(props) => props.theme.grey8};

  h1 {
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.grey1};
  }

  ${(props) => props.theme.desktop} {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 53px;
    border-bottom: 1px solid ${(props) => props.theme.grey4};
  }
`;

const NavBarHeader = ({ isDesktop }) => {
  return (
    <NavBarHeaderWrapper>
      <h1>주식회사 자버</h1>
      {!isDesktop && <NavBarButton />}
    </NavBarHeaderWrapper>
  );
};

export default React.memo(NavBarHeader);
