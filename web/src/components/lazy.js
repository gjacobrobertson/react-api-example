import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

export default Target =>
  class Lazy extends Component {
    componentDidMount() {
      this.props.load();
    }

    render() {
      return this.props.loaded ? (
        <Target {...this.props} />
      ) : (
        <Dimmer active>
          <Loader />
        </Dimmer>
      );
    }
  };
