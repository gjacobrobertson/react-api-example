import React, { Component } from 'react';
import { Header, Statistic } from 'semantic-ui-react';

const Item = ({ char, count }) => (
  <Statistic>
    <Statistic.Label>{char}</Statistic.Label>
    <Statistic.Value>{count.toLocaleString()}</Statistic.Value>
  </Statistic>
);

export default class Frequency extends Component {
  componentDidMount() {
    this.props.build();
  }

  render() {
    const { frequencies } = this.props;
    return (
      <React.Fragment>
        <Header as="h2">Frequency</Header>
        <Statistic.Group size="mini">
          {frequencies.map(([char, count]) => (
            <Item key={char} char={char} count={count} />
          ))}
        </Statistic.Group>
      </React.Fragment>
    );
  }
}
