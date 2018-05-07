import React from 'react';
import { Switch, Route } from 'react-router';
import { Container } from 'semantic-ui-react';
import TopMenu from './TopMenu';
import People from '../containers/People';
import Frequency from './Frequency';
import Duplicates from './Duplicates';

const App = () => (
  <React.Fragment>
    <TopMenu />
    <Container>
      <Switch>
        <Route exact path="/" component={People} />
        <Route path="/frequency" component={Frequency} />
        <Route path="/duplicates" component={Duplicates} />
      </Switch>
    </Container>
  </React.Fragment>
);
export default App;
