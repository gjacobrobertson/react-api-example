import React, { Component } from 'react';
import { List, Header, Loader } from 'semantic-ui-react';
import DuplicateItem from './DuplicateItem';

const buildKey = ([a, b]) => `${a.id}:${b.id}`;

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
          {dupes.map(entry => (
            <DuplicateItem key={buildKey(entry)} entry={entry} />
          ))}
          <List.Item key="loader">
            <Loader inline="centered" active={loading} />
          </List.Item>
        </List>
      </React.Fragment>
    );
  }
}
