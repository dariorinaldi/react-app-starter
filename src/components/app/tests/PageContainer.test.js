import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageContainer from '../PageContainer';

const FakeComp = () => <div>fake</div>;

describe('PageContainer', () => {
  const props = {
    routes: {},
  };
  const pageContainer = () =>
    mount(
      <Router>
        <PageContainer {...props} />
      </Router>
    );

  describe('IF routes are passed', () => {
    beforeEach(() => {
      props.routes = {
        HOME: { path: '/', component: FakeComp },
        DASHBOARD: { path: '/dashboard', component: FakeComp },
        CONTACTS: { path: '/contacts', component: FakeComp },
      };
    });

    it('render as many <Route> as the passed route items', () => {
      expect(pageContainer().find(Route).length).toBe(3);
    });
  });

  describe('IF NOT routes are passed', () => {
    beforeEach(() => {
      props.routes = {};
    });

    it('render no <Route>', () => {
      expect(pageContainer().find(Route).length).toBe(0);
    });
  });
});
