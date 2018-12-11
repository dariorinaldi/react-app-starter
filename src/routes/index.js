import React from 'react';

const HomePage = React.lazy(() => import('../pages/Home'));
//const DashboardPage = React.lazy(() => import('pages/Dashboard'));

const routes = {
  HOME: { path: '/', component: HomePage },
};

export default routes;
