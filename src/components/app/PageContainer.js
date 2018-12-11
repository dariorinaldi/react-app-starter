import React from 'react';
import styled from 'styled-components';
import routes from '../../routes';
import { Route } from 'react-router';

const PageContainer = ({ routes }) => {
  const renderRoutes = Object.keys(routes).map((r) => (
    <Route key={r} path={routes[r].path} component={routes[r].component} />
  ));

  return <>{renderRoutes}</>;
};

export default PageContainer;
