import React from 'react';
import styled from 'styled-components';
import Search from '../Search';

const MemeberHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin-left: 40px;
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    color: ${(props) => props.theme.grey8};
  }
  > div {
    margin-top: -5px;
  }
`;

const MemberHeader = () => {
  return (
    <>
      <MemeberHeaderWrapper>
        <h2>구성원</h2>
        <Search placeholder="이름" />
      </MemeberHeaderWrapper>
    </>
  );
};

export default MemberHeader;
