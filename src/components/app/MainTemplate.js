import React from 'react';
import styled from 'styled-components';
import LoadingPage from './LoadingPage';
import Header from './Header';
import Navigator from './Navigator';
import PageContainer from './PageContainer';

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template.rows: 1fr auto;
  min-width: 100vw;
  min-height: 100vh;
`;

const MainTemplate = () => {
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <MainLayout>
        <Header />
        <Navigator />
        <PageContainer />
      </MainLayout>
    </React.Suspense>
  );
};

export default MainTemplate;
