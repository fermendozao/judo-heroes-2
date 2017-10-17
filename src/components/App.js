import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import { IndexPage } from './IndexPage';
import { PersonProfile } from './PersonProfile';
import { NotFoundPage } from './NotFoundPage';
import vincoorbians from '../data/vincoorbians';

const renderIndex = () => <IndexPage persons={vincoorbians} />;

const renderProfile = ({ match, staticContext }) => {
  const id = match.params.id;
  const vincoorbian = vincoorbians.find(current => current.id === id);
  if (!vincoorbian) {
    return <NotFoundPage staticContext={staticContext} />;
  }

  return <PersonProfile person={vincoorbian} persons={vincoorbians} />;
};

export const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" render={renderIndex} />
      <Route exact path="/vincoorbian/:id" render={renderProfile} />
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
);

export default App;
