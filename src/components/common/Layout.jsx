import React from 'react';
import styled from 'styled-components';

const LoayoutWrapper = styled.div`
  ${(props) => props.theme.desktop} {
    padding: 10px;
    margin-left: 15px;
    width: 100%;
    background: ${(props) => props.theme.grey1};
    border-radius: 8px;
  }
`;

const Layout = ({ children }) => {
  return <LoayoutWrapper>{children}</LoayoutWrapper>;
};

export default Layout;
