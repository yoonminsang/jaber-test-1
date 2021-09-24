import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import useWindowSize from './hooks/useWindowSize';
import Layout from './components/common/Layout';
import NavBar from './components/NavBar';
import Member from './components/Member';
import DocumentBox from './components/DocumentBox';
import Settings from './components/Settings';
import InformationManage from './components/InformationManage';

const AppWrapper = styled.div`
  min-height: 100vh;
  ${(props) => props.theme.desktop} {
    display: flex;
    background-color: ${(props) => props.theme.grey4};
    padding: 19px 15px;
    padding-bottom: 30px;
  }
`;

const getContent = (selectedMenuKey, isDesktop) => {
  switch (selectedMenuKey[0]) {
    case '0':
      return <Member isDesktop={isDesktop} />;
    case '1':
      return <DocumentBox />;
    case '2':
      return <InformationManage />;
    case '3':
      return <Settings />;
    default:
      return <div>not content</div>;
  }
};

const App = () => {
  const { width } = useWindowSize();
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState(['0']);
  const content = useMemo(
    () => getContent(selectedMenuKey, isDesktop),
    [selectedMenuKey, isDesktop]
  );
  useEffect(() => {
    if (width >= 1200) setIsDesktop(true);
    else setIsDesktop(false);
  }, [width]);

  return (
    <AppWrapper>
      <NavBar
        isDesktop={isDesktop}
        selectedMenuKey={selectedMenuKey}
        setSelectedMenuKey={setSelectedMenuKey}
      />
      <Layout>{content}</Layout>
    </AppWrapper>
  );
};

export default App;
