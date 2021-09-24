import React from 'react';
import styled, { css } from 'styled-components';

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.img &&
    css`
      justify-content: space-evenly;
    `}

  ${(props) =>
    props.small &&
    css`
      width: 126px;
      height: 32px;
      font-size: 14px;
      padding: 0 15px;
      border-radius: 4px;
    `}

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.almostFullWidth &&
    css`
      width: 90%;
    `}

  ${(props) =>
    props.blue &&
    css`
      color: ${(props) => props.theme.grey1};
      background-color: ${(props) => props.theme.blue6};
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled.a`
  // styled(Link)
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

export default Button;
