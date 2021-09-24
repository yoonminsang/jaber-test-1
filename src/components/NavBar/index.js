import React from 'react';
import styled from 'styled-components';
import NavBarHeader from './NavBarHeader';
import NavBarButton from './NavBarButton';
import NavBarList from './NavBarList';

const NavBarWrapper = styled.div`
  ${(props) => props.theme.desktop} {
    display: flex;
    flex-direction: column;
    width: 240px;
    ul {
      width: 241px;
      .ant-menu-item-selected {
        width: 240px;
      }
    }
    background: ${(props) => props.theme.grey8};
    border-radius: 8px;
  }
`;

const NavBar = ({ isDesktop, selectedMenuKey, setSelectedMenuKey }) => {
  return (
    <NavBarWrapper>
      <NavBarHeader isDesktop={isDesktop} />
      <NavBarList
        selectedMenuKey={selectedMenuKey}
        setSelectedMenuKey={setSelectedMenuKey}
        isDesktop={isDesktop}
      />
      {isDesktop && <NavBarButton almostFullWidth />}
    </NavBarWrapper>
  );
};

export default React.memo(NavBar);
