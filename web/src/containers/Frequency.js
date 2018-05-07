import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import * as actions from '../actions/frequency';
import Frequency from '../components/Frequency';

const getSortedFrequencies = createSelector(
  state => state.frequency,
  frequency => Object.entries(frequency).sort((a, b) => b[1] - a[1])
);

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  frequencies: getSortedFrequencies(state),
});

const mapDispatchToProps = bindActionCreators.bind(null, actions);
export default connect(mapStateToProps, mapDispatchToProps)(Frequency);
