import React, { Component } from 'react';
import { List, Header, Loader, Card } from 'semantic-ui-react';
import Person from '../Person';

export default class Duplicates extends Component {
  componentDidMount() {
    const { loading, loaded, build } = this.props;
    if (!loading && !loaded) {
      build();
    }
  }
  render() {
    const { dupes, loading } = this.props;
    return (
      <React.Fragment>
        <Header as="h2">Duplicates</Header>
        <List relaxed="very" divided>
          {dupes.map(([a, b]) => (
            <List.Item key={`${a.id}:${b.id}`}>
              <Card.Group centered>
                <Person {...a} />
                <Person {...b} />
              </Card.Group>
            </List.Item>
          ))}
          <List.Item key="loader">
            <Loader inline="centered" active={loading} />
          </List.Item>
        </List>
      </React.Fragment>
    );
  }
}
