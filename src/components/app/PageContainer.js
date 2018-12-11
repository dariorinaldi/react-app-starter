import React from 'react';
import styled from 'styled-components';
import routes from '../../routes';
import { Route } from 'react-router';

const PageContainer = () => {
  const renderLinks = routes.map((r) => <Route path={r.path} component={r.component} />);

  return <>{renderLinks()}</>;
};

export default PageContainer;
