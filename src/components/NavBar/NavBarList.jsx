import React from 'react';
import { Menu } from 'antd';
import MenuWrapper from '../common/MenuWrapper';
import { NAV_BAR_LIST_MOCK } from '../../constants';

const NavBarList = ({ selectedMenuKey, setSelectedMenuKey, isDesktop }) => {
  const [mode, menuTheme] = isDesktop
    ? ['inline', 'dark']
    : ['horizontal', 'light'];
  return (
    <MenuWrapper menuTheme={menuTheme}>
      <Menu
        selectedKeys={selectedMenuKey}
        onSelect={({ selectedKeys }) => setSelectedMenuKey(selectedKeys)}
        mode={mode}
      >
        {NAV_BAR_LIST_MOCK.map((nav, idx) => (
          <Menu.Item key={String(idx)}>{nav}</Menu.Item>
        ))}
      </Menu>
    </MenuWrapper>
  );
};

export default NavBarList;
