import styled, { css } from 'styled-components';

const MenuWrapper = styled.div`
  .ant-menu-item {
    font-size: 14px;
  }

  ${(props) =>
    props.menuTheme === 'light' &&
    css`
      .ant-menu {
        color: ${(props) => props.theme.grey6};
        background-color: ${(props) => props.theme.grey2};
      }
      .ant-menu-item-selected {
        color: ${(props) => props.theme.blue6} !important;
        background-color: ${(props) => props.theme.grey2} !important;
      }
    `}

  ${(props) =>
    props.menuTheme === 'dark' &&
    css`
      .ant-menu {
        color: ${(props) => props.theme.grey1};
        background-color: ${(props) => props.theme.grey8};
      }
      .ant-menu-item-selected {
        color: ${(props) => props.theme.grey1} !important;
        background-color: ${(props) => props.theme.blue5} !important;
      }
    `}
`;

export default MenuWrapper;
