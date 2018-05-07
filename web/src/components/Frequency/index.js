import React, { Component } from 'react';
import { Header, Statistic } from 'semantic-ui-react';
import FlipMove from 'react-flip-move';
import FrequencyItem from './FrequencyItem';

export default class Frequency extends Component {
  componentDidMount() {
    const { frequencies, build } = this.props;
    if (Object.keys(frequencies).length === 0) {
      build();
    }
  }

  render() {
    const { frequencies } = this.props;
    return (
      <React.Fragment>
        <Header as="h2">Frequency</Header>
        <Statistic.Group size="mini" as={FlipMove}>
          {frequencies.map(([char, count]) => (
            <FrequencyItem key={char} char={char} count={count} />
          ))}
        </Statistic.Group>
      </React.Fragment>
    );
  }
}
