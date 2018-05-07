import React, { Component } from 'react';
import { Statistic } from 'semantic-ui-react';

export default class FrequencyItem extends Component {
  render() {
    const { char, count } = this.props;
    return (
      <Statistic>
        <Statistic.Label>{char}</Statistic.Label>
        <Statistic.Value>{count.toLocaleString()}</Statistic.Value>
      </Statistic>
    );
  }
}
