import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import Button from '../common/Button';
import styled from 'styled-components';

const NavBarButtonWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavBarButton = (props) => {
  return (
    <NavBarButtonWrapper>
      <Button img small blue {...props}>
        <UserOutlined />
        <div>관리자모드</div>
      </Button>
    </NavBarButtonWrapper>
  );
};

export default React.memo(NavBarButton);
